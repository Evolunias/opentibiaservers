import pool from '@/lib/aiven';

export async function GET(req) {
  try {
    const conn = await pool.getConnection();
    try {
      let announcements = [];
      
      // Try to fetch from announcements table if it exists
      try {
        const [results] = await conn.execute(
          'SELECT id, title, content, author, category, created FROM announcements ORDER BY created DESC LIMIT 10'
        );
        announcements = results || [];
      } catch (tableError) {
        // If table doesn't exist, try to fetch from news table
        if (tableError.message.includes("doesn't exist")) {
          try {
            const [results] = await conn.execute(
              'SELECT id, title, content, author, category, created FROM news ORDER BY created DESC LIMIT 10'
            );
            announcements = results || [];
          } catch (newsError) {
            // Neither table exists, return empty gracefully
            console.log('No announcements table found');
          }
        } else {
          throw tableError;
        }
      }

      return Response.json({
        announcements: announcements,
        count: announcements.length,
        timestamp: new Date().toISOString()
      }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('Announcements error:', error);
    return Response.json({
      announcements: [],
      count: 0,
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 200 });
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
      // Try announcements table first
      let result;
      try {
        [result] = await conn.execute(
          'INSERT INTO announcements (title, content, author, category, created) VALUES (?, ?, ?, ?, NOW())',
          [title, content, author, category || 'news']
        );
      } catch (tableError) {
        // If announcements table doesn't exist, try news table
        if (tableError.message.includes("doesn't exist")) {
          [result] = await conn.execute(
            'INSERT INTO news (title, content, author, category, created) VALUES (?, ?, ?, ?, NOW())',
            [title, content, author, category || 'news']
          );
        } else {
          throw tableError;
        }
      }

      return Response.json({
        success: true,
        id: result.insertId,
        message: 'Announcement posted successfully',
        timestamp: new Date().toISOString()
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
