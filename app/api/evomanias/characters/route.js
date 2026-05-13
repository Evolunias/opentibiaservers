import pool from '@/lib/aiven';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const accountId = searchParams.get('accountId');
  const characterId = searchParams.get('characterId');

  try {
    const conn = await pool.getConnection();
    try {
      if (action === 'list' && accountId) {
        const [characters] = await conn.execute(
          'SELECT id, name, level, experience, vocation, status, created FROM players WHERE account_id = ? ORDER BY level DESC',
          [accountId]
        );

        return Response.json({ characters }, { status: 200 });
      }

      if (action === 'detail' && characterId) {
        const [characters] = await conn.execute(
          'SELECT id, name, level, experience, vocation, status, created FROM players WHERE id = ?',
          [characterId]
        );

        if (characters.length === 0) {
          return Response.json({ error: 'Character not found' }, { status: 404 });
        }

        return Response.json({ character: characters[0] }, { status: 200 });
      }

      if (action === 'highscores') {
        const vocation = searchParams.get('vocation');
        let query = 'SELECT id, name, level, experience, vocation FROM players ORDER BY experience DESC LIMIT 100';
        const params = [];

        if (vocation) {
          query = 'SELECT id, name, level, experience, vocation FROM players WHERE vocation = ? ORDER BY experience DESC LIMIT 100';
          params.push(vocation);
        }

        const [characters] = await conn.execute(query, params);
        return Response.json({ characters, timestamp: new Date().toISOString() }, { status: 200 });
      }

      return Response.json({ error: 'Invalid action' }, { status: 400 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Characters error:', error);
    return Response.json({ error: 'Server error', details: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  const { action, accountId, name, vocation, world } = await req.json();

  if (!action) {
    return Response.json({ error: 'Missing action' }, { status: 400 });
  }

  const conn = await pool.getConnection();

  try {
    if (action === 'create') {
      if (!accountId || !name || !vocation || !world) {
        return Response.json({ error: 'Missing required fields' }, { status: 400 });
      }

      const [existing] = await conn.execute(
        'SELECT id FROM players WHERE name = ?',
        [name]
      );

      if (existing.length > 0) {
        return Response.json({ error: 'Character name already taken' }, { status: 400 });
      }

      const [result] = await conn.execute(
        'INSERT INTO players (account_id, name, vocation, level, experience, status, created) VALUES (?, ?, ?, 1, 0, "active", NOW())',
        [accountId, name, vocation]
      );

      return Response.json({ 
        success: true, 
        characterId: result.insertId,
        character: {
          id: result.insertId,
          name,
          vocation,
          world,
          level: 1,
          experience: 0,
        }
      }, { status: 201 });
    }

    return Response.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Character creation error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  } finally {
    conn.release();
  }
}
