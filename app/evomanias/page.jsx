'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useEvomaniasAuth } from '../context/EvomaniasAuthContext';

export default function EvomaniasHome() {
  const { account } = useEvomaniasAuth();
  const [topPlayers, setTopPlayers] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [serverStats, setServerStats] = useState({
    onlinePlayers: 0,
    totalCharacters: 0,
    status: 'Offline',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      setError(null);
      
      // Load server stats
      const statsResponse = await fetch('/api/evomanias/server-stats');
      const statsData = await statsResponse.json();
      setServerStats(statsData);

      // Load top players
      const playersResponse = await fetch('/api/evomanias/characters?action=highscores');
      const playersData = await playersResponse.json();
      setTopPlayers((playersData.characters || []).slice(0, 5));

      // Load announcements
      const announcementsResponse = await fetch('/api/evomanias/announcements');
      const announcementsData = await announcementsResponse.json();
      setAnnouncements(announcementsData.announcements || []);
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Unable to load server data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
  };

  const vocations = {
    'Knight': '🗡️',
    'Paladin': '🏹',
    'Druid': '🌿',
    'Sorcerer': '⚡',
  };

  return (
    <div className="evomanias-grid">
      {/* Main Content */}
      <div className="evomanias-main">
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
            Experience the ultimate Tibia adventure. Create your account, join our community, and become a legend.
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
                  Create My Account
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
                  View Rankings
                </Link>
              </>
            )}
          </div>
        </div>

        {/* News & Announcements Section */}
        <div className="card">
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            📢 Latest News & Updates
          </h2>

          {error && (
            <div style={{
              padding: '1rem',
              background: 'rgba(220, 53, 69, 0.1)',
              border: '1px solid rgba(220, 53, 69, 0.3)',
              borderRadius: '4px',
              color: '#ff6b6b',
              marginBottom: '1.5rem',
              fontSize: '0.875rem'
            }}>
              {error}
            </div>
          )}

          {loading ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              Loading updates...
            </div>
          ) : announcements.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              No announcements yet. Check back soon!
            </div>
          ) : (
            announcements.map((post) => (
              <div key={post.id} className="post">
                <div className="post-date">
                  <div className="post-date-day">{formatDate(post.created).split(' ')[1]}</div>
                  <div className="post-date-month">{formatDate(post.created).split(' ')[0]}</div>
                </div>
                <div className="post-body">
                  <h2>
                    <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                      {post.title}
                    </span>
                  </h2>
                  <p>{post.content}</p>
                  <div className="post-meta">
                    Posted by <strong>{post.author}</strong> • <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)' }}>
                      {formatDate(post.created)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="evomanias-sidebar">
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
                  <td style={{ fontSize: '0.875rem' }}>Server</td>
                  <td style={{ fontSize: '0.875rem', textAlign: 'right', color: '#00bc8c', fontWeight: '700' }}>
                    {loading ? '...' : '● ' + serverStats.status}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: '0.875rem' }}>Adventurers Online</td>
                  <td style={{ fontSize: '0.875rem', textAlign: 'right', color: '#7cb8ff', fontWeight: '600' }}>
                    {loading ? '...' : serverStats.onlinePlayers}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: '0.875rem' }}>Total Characters</td>
                  <td style={{ fontSize: '0.875rem', textAlign: 'right', fontWeight: '600' }}>
                    {loading ? '...' : serverStats.totalCharacters}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <button 
              className="btn btn-success btn-block" 
              style={{ margin: 0 }}
              onClick={loadAllData}
              disabled={loading}
            >
              {loading ? 'Refreshing...' : 'Refresh Status'}
            </button>
          </div>
        </div>

        {/* Top Adventurers Card */}
        <div className="card">
          <div className="card-header">
            <h3 style={{
              color: '#7cb8ff',
              fontSize: '1.125rem',
              fontWeight: 700,
              margin: 0
            }}>
              🏆 Top Adventurers
            </h3>
          </div>
          <div className="card-body" style={{ padding: '1rem 0' }}>
            {loading ? (
              <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                Loading rankings...
              </p>
            ) : topPlayers.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', padding: '1rem' }}>
                Be the first to claim your glory!
              </p>
            ) : (
              <table className="table" style={{ margin: 0 }}>
                <tbody>
                  {topPlayers.map((player, idx) => (
                    <tr key={player.id}>
                      <td style={{ fontSize: '0.875rem', paddingLeft: '0.5rem', width: '30px' }}>
                        <strong>{idx === 0 ? '👑' : idx + 1}</strong>
                      </td>
                      <td style={{ fontSize: '0.875rem' }}>
                        <Link href={`/evomanias/character/${player.id}`} style={{ color: '#7cb8ff', fontWeight: '600' }}>
                          {player.name}
                        </Link>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                          {vocations[player.vocation] || '⚔️'} Level {player.level}
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
              View Full Rankings →
            </Link>
          </div>
        </div>

        {/* Join Community Card */}
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
            Join Our Community
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            Connect with other adventurers, share tips, and stay updated on server news.
          </p>
          <a href="#" className="btn btn-primary btn-block" style={{ margin: 0 }}>
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
}
