'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useEvomaniasAuth } from '../context/EvomaniasAuthContext';

export default function EvomaniasHome() {
  const { account } = useEvomaniasAuth();
  const [topPlayers, setTopPlayers] = useState([]);
  const [serverStats, setServerStats] = useState({
    online: 71,
    characters: 342,
    uptime: '1w 2d 5h',
  });
  const [loading, setLoading] = useState(true);

  // Sample news data for demo
  const [newsPosts] = useState([
    {
      id: 1,
      day: '17',
      month: 'Apr',
      title: 'EVOMANIAS Server Launch',
      content: 'Welcome to EVOMANIAS! We are excited to announce the official launch of our server. Join thousands of players and experience the ultimate Tibia adventure.',
      author: 'Admin',
      category: 'announcement'
    },
    {
      id: 2,
      day: '10',
      month: 'Apr',
      title: 'Balance Updates & New Features',
      content: 'This patch includes several balance updates to improve gameplay. New features have been added to enhance your experience.',
      author: 'GameMaster',
      category: 'patch'
    },
    {
      id: 3,
      day: '5',
      month: 'Apr',
      title: 'Community Events',
      content: 'Join our community events this week. Participate and win exclusive rewards. More details available in our Discord server.',
      author: 'Admin',
      category: 'event'
    }
  ]);

  useEffect(() => {
    loadServerData();
  }, []);

  const loadServerData = async () => {
    try {
      const response = await fetch('/api/evomanias/characters?action=highscores');
      const data = await response.json();

      const players = data.characters || [];
      setTopPlayers(players.slice(0, 5));

      const onlineCount = players.filter(p => p.status === 'active').length;
      setServerStats(prev => ({
        ...prev,
        online: onlineCount,
        characters: players.length,
      }));
    } catch (error) {
      console.error('Error loading server data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: '1.5rem',
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '1.5rem'
    }}>
      {/* Main Content (9 columns on desktop, 12 on mobile) */}
      <div style={{
        gridColumn: 'span 12',
        '@media (min-width: 1024px)': {
          gridColumn: 'span 9'
        }
      }}>
        {/* Hero Section */}
        <div className="card" style={{
          marginBottom: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(124, 184, 255, 0.1) 0%, rgba(90, 159, 230, 0.05) 100%)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(124, 184, 255, 0.2)'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: '#7cb8ff'
          }}>
            EVOMANIAS
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: '1.5rem',
            maxWidth: '600px',
            margin: '0 auto 1.5rem'
          }}>
            Experience the ultimate Tibia adventure. Create your account, join thousands of players, and become a legend.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {!account ? (
              <>
                <Link href="/evomanias/register" className="btn btn-primary">
                  Create Account
                </Link>
                <Link href="/evomanias/login" className="btn btn-secondary">
                  Sign In
                </Link>
              </>
            ) : (
              <>
                <Link href="/evomanias/account" className="btn btn-primary">
                  My Account
                </Link>
                <Link href="/evomanias/highscores" className="btn btn-secondary">
                  Highscores
                </Link>
              </>
            )}
          </div>
        </div>

        {/* News/Patches Section */}
        <div className="card">
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            Latest News
          </h2>

          {newsPosts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-date">
                <div className="post-date-day">{post.day}</div>
                <div className="post-date-month">{post.month}</div>
              </div>
              <div className="post-body">
                <h2>
                  <a href="#" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                    {post.title}
                  </a>
                </h2>
                <p>{post.content}</p>
                <div className="post-meta">
                  Posted by <a href="#">{post.author}</a> •
                  <a href="#" style={{ marginLeft: '0.5rem' }}>View Thread →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar (3 columns on desktop, 12 on mobile) */}
      <div style={{
        gridColumn: 'span 12',
        display: 'grid',
        gap: '1.5rem',
        '@media (min-width: 1024px)': {
          gridColumn: 'span 3'
        }
      }}>
        {/* Server Status Card */}
        <div className="card">
          <div className="card-header">
            <h3 style={{
              color: '#7cb8ff',
              fontSize: '1.125rem',
              fontWeight: 700,
              margin: 0
            }}>
              🌐 Server Status
            </h3>
          </div>
          <div className="card-body" style={{ padding: '1rem 0' }}>
            <table className="table" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ fontSize: '0.875rem' }}>Status</td>
                  <td style={{ fontSize: '0.875rem', textAlign: 'right', color: '#00bc8c', fontWeight: '700' }}>● Online</td>
                </tr>
                <tr>
                  <td style={{ fontSize: '0.875rem' }}>Online Players</td>
                  <td style={{ fontSize: '0.875rem', textAlign: 'right', color: '#7cb8ff' }}>
                    <Link href="#" style={{ color: '#7cb8ff', fontWeight: '600' }}>
                      {loading ? '...' : serverStats.online}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: '0.875rem' }}>Total Characters</td>
                  <td style={{ fontSize: '0.875rem', textAlign: 'right' }}>{loading ? '...' : serverStats.characters}</td>
                </tr>
                <tr>
                  <td style={{ fontSize: '0.875rem' }}>Uptime</td>
                  <td style={{ fontSize: '0.875rem', textAlign: 'right' }}>{serverStats.uptime}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <button className="btn btn-success btn-block" style={{ margin: 0 }}>
              Download Client
            </button>
          </div>
        </div>

        {/* Top 5 Players Card */}
        <div className="card">
          <div className="card-header">
            <h3 style={{
              color: '#7cb8ff',
              fontSize: '1.125rem',
              fontWeight: 700,
              margin: 0
            }}>
              🏆 Top 5 Players
            </h3>
          </div>
          <div className="card-body" style={{ padding: '1rem 0' }}>
            {loading ? (
              <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>Loading...</p>
            ) : topPlayers.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                No players yet. Be the first!
              </p>
            ) : (
              <table className="table" style={{ margin: 0 }}>
                <tbody>
                  {topPlayers.map((player, idx) => (
                    <tr key={player.id}>
                      <td style={{ fontSize: '0.875rem', paddingLeft: '0.5rem', width: '30px' }}>
                        <strong>{idx + 1}</strong>
                      </td>
                      <td style={{ fontSize: '0.875rem' }}>
                        <Link href={`/evomanias/character/${player.id}`} style={{ color: '#7cb8ff', fontWeight: '600' }}>
                          {player.name}
                        </Link>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                          Lv. {player.level || 1}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="card-footer">
            <Link href="/evomanias/highscores" className="btn btn-secondary btn-block" style={{ margin: 0 }}>
              View All →
            </Link>
          </div>
        </div>

        {/* Join Discord Card */}
        <div className="card" style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(114, 137, 218, 0.1) 0%, rgba(100, 120, 200, 0.05) 100%)',
          border: '1px solid rgba(114, 137, 218, 0.2)'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontSize: '2rem' }}>💬</span>
          </div>
          <h3 style={{
            color: '#7cb8ff',
            fontSize: '1.125rem',
            fontWeight: 700,
            marginBottom: '0.5rem'
          }}>
            Join Our Discord
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            Connect with the community, get updates, and meet fellow adventurers.
          </p>
          <a href="#" className="btn btn-primary btn-block" style={{ margin: 0 }}>
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
}
