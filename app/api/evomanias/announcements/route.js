import pool from '@/lib/aiven';

export async function GET(req) {
  try {
    const conn = await pool.getConnection();
    try {
      const [announcements] = await conn.execute(
        'SELECT id, title, content, author, category, created FROM announcements ORDER BY created DESC LIMIT 10'
      );

      return Response.json({
        announcements: announcements || []
      }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Announcements error:', error);
    return Response.json({
      announcements: [],
      error: error.message
    }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { title, content, author, category } = await req.json();

    if (!title || !content || !author) {
      return Response.json(
        { error: 'Missing required fields: title, content, author' },
        { status: 400 }
      );
    }

    const conn = await pool.getConnection();
    try {
      const [result] = await conn.execute(
        'INSERT INTO announcements (title, content, author, category, created) VALUES (?, ?, ?, ?, NOW())',
        [title, content, author, category || 'news']
      );

      return Response.json({
        success: true,
        id: result.insertId,
        message: 'Announcement posted successfully'
      }, { status: 201 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Announcement creation error:', error);
    return Response.json(
      { error: 'Server error', details: error.message },
      { status: 500 }
    );
  }
}
