import pool from '@/lib/aiven';

export async function GET(req) {
  try {
    const conn = await pool.getConnection();
    try {
      const [onlinePlayers] = await conn.execute(
        `SELECT id, name, level, vocation, experience, created
         FROM players
         ORDER BY level DESC, experience DESC
         LIMIT 50`
      );

      return Response.json({
        onlinePlayers: onlinePlayers || [],
        count: (onlinePlayers || []).length,
        timestamp: new Date().toISOString()
      }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Online players error:', error);
    return Response.json({
      onlinePlayers: [],
      count: 0,
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
