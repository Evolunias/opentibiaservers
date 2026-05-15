import pool from '@/lib/aiven';
import bcrypt from 'bcrypt';

export async function POST(req) {
  let conn;

  try {
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return Response.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    const { action, email, password, username } = body;

    if (!action) {
      return Response.json({ error: 'Missing action' }, { status: 400 });
    }

    conn = await pool.getConnection();

    if (action === 'register') {
      if (!email || !password || !username) {
        return Response.json({ error: 'Missing required fields' }, { status: 400 });
      }

      const [existingUser] = await conn.execute(
        'SELECT id FROM accounts WHERE email = ? OR name = ?',
        [email, username]
      );

      if (existingUser.length > 0) {
        return Response.json({ error: 'Email or username already taken' }, { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const [result] = await conn.execute(
        'INSERT INTO accounts (name, email, password, created) VALUES (?, ?, ?, NOW())',
        [username, email, hashedPassword]
      );

      return Response.json({
        success: true,
        accountId: result.insertId,
        message: 'Account created successfully'
      }, { status: 201 });
    }

    if (action === 'login') {
      if (!email || !password) {
        return Response.json({ error: 'Missing email or password' }, { status: 400 });
      }

      const [users] = await conn.execute(
        'SELECT id, name, email, password FROM accounts WHERE email = ?',
        [email]
      );

      if (users.length === 0) {
        return Response.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      const user = users[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return Response.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      return Response.json({
        success: true,
        account: {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      }, { status: 200 });
    }

    return Response.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Auth error:', error.message, error);
    return Response.json({ error: 'Server error', details: error.message }, { status: 500 });
  } finally {
    if (conn) conn.release();
  }
}
