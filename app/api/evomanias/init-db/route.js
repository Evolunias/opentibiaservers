import pool from '@/lib/aiven';

const createTablesSQL = `
CREATE TABLE IF NOT EXISTS players (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id VARCHAR(255),
  name VARCHAR(255) NOT NULL UNIQUE,
  level INT DEFAULT 1,
  experience BIGINT DEFAULT 0,
  vocation VARCHAR(50),
  status VARCHAR(50) DEFAULT 'active',
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_account_id (account_id),
  INDEX idx_level (level)
);

CREATE TABLE IF NOT EXISTS announcements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  author VARCHAR(255),
  category VARCHAR(50),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_created (created)
);
`;

export async function POST(req) {
  // Check auth (simple check for now)
  const authHeader = req.headers.get('authorization');
  if (authHeader !== 'Bearer init-secret-key') {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const conn = await pool.getConnection();
    try {
      const statements = createTablesSQL.split(';').filter(s => s.trim());
      
      for (const statement of statements) {
        if (statement.trim()) {
          await conn.execute(statement);
        }
      }

      return Response.json({
        success: true,
        message: 'Database initialized successfully',
        timestamp: new Date().toISOString()
      }, { status: 200 });
    } finally {
      conn.release();
    }
  } catch (error) {
    console.error('[init-db] Error:', error.message);
    return Response.json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
