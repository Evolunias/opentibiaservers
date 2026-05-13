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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    loadAllData();
    const interval = setInterval(() => loadAllData(), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fetchWithTimeout = async (url, timeout = 5000) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (err) {
      clearTimeout(timeoutId);
      throw err;
    }
  };

  const loadAllData = async () => {
    try {
      try {
        const statsData = await fetchWithTimeout('/api/evomanias/server-stats');
        setServerStats(statsData);
      } catch (err) {
        console.error('Failed to load stats:', err.message);
      }

      try {
        const playersData = await fetchWithTimeout('/api/evomanias/characters?action=highscores');
        setTopPlayers((playersData.characters || []).slice(0, 10));
      } catch (err) {
        console.error('Failed to load players:', err.message);
      }

      try {
        const announcementsData = await fetchWithTimeout('/api/evomanias/announcements');
        setAnnouncements(announcementsData.announcements || []);
      } catch (err) {
        console.error('Failed to load announcements:', err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const vocations = {
    'Knight': '⚔️',
    'Paladin': '🛡️',
    'Druid': '🌿',
    'Sorcerer': '✨',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes glow { 0%, 100% { opacity: 0.3; text-shadow: 0 0 10px rgba(124, 184, 255, 0.5); } 50% { opacity: 1; text-shadow: 0 0 30px rgba(124, 184, 255, 1); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-100px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes shockwave { 0% { box-shadow: 0 0 0 0 rgba(124, 184, 255, 0.8); } 70% { box-shadow: 0 0 0 50px rgba(124, 184, 255, 0); } 100% { box-shadow: 0 0 0 50px rgba(124, 184, 255, 0); } }
        .epic-btn { animation: pulse 2s ease-in-out infinite; }
        .glow-text { animation: glow 3s ease-in-out infinite; }
      `}</style>

      {/* Fixed Background with effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: `
          radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(25, 25, 112, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0a0e27 0%, #1a1a3e 50%, #0f1428 100%)
        `,
        pointerEvents: 'none'
      }}>
        {/* Mouse-following glow */}
        <div style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(124, 184, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          left: mousePos.x - 400,
          top: mousePos.y - 400,
          transition: 'all 0.4s ease-out',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />

        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              background: 'rgba(124, 184, 255, 0.6)',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's',
              boxShadow: '0 0 20px rgba(124, 184, 255, 0.8)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* EPIC HERO SECTION */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* War/Combat background overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"%3E%3Cstop offset="0%" style="stop-color:rgba(124,184,255,0.02);stop-opacity:1" /%3E%3Cstop offset="100%" style="stop-color:rgba(139,69,19,0.02);stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23grad)"/"%3E%3C/svg%3E")',
            opacity: 0.3,
            zIndex: -1
          }} />

          {/* Title with animations */}
          <div style={{ animation: 'slideInDown 1s ease-out' }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 15vw, 8rem)',
              fontWeight: 900,
              margin: '0 0 1rem 0',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 50%, #ff6b6b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 60px rgba(124, 184, 255, 0.5)',
              letterSpacing: '-2px'
            }} className="glow-text">
              ⚔️ EVOMANIAS ⚔️
            </h1>
          </div>

          {/* Tagline */}
          <div style={{ animation: 'slideInUp 1s ease-out 0.2s both' }}>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 2rem)',
              color: '#7cb8ff',
              margin: '1.5rem 0 3rem 0',
              maxWidth: '700px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px'
            }}>
              RISE. EVOLVE. DOMINATE.
            </p>
          </div>

          {/* Epic description */}
          <div style={{ animation: 'fadeIn 1.5s ease-out 0.4s both' }}>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '650px',
              marginBottom: '2.5rem',
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              Experience the ultimate evolution-based MMORPG. Battle your way through intense PvP warfare, uncover legendary loot, and forge your legend in a world where only the strongest survive.
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'zoomIn 1s ease-out 0.6s both'
          }}>
            {!account ? (
              <>
                <Link href="/evomanias/register" style={{
                  padding: '1rem 3rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
                  color: '#000',
                  border: '2px solid transparent',
                  borderRadius: '0',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 20px rgba(124, 184, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                  position: 'relative'
                }} className="epic-btn" onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 40px rgba(124, 184, 255, 0.9), inset 0 0 30px rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'scale(1.05)';
                }} onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 0 20px rgba(124, 184, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1)';
                }}>
                  Enter The Arena
                </Link>
                <Link href="/evomanias/login" style={{
                  padding: '1rem 3rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  background: 'transparent',
                  color: '#7cb8ff',
                  border: '2px solid #7cb8ff',
                  borderRadius: '0',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 20px rgba(124, 184, 255, 0.3)'
                }} onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(124, 184, 255, 0.1)';
                  e.target.style.boxShadow = '0 0 40px rgba(124, 184, 255, 0.8)';
                  e.target.style.transform = 'scale(1.05)';
                }} onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.boxShadow = '0 0 20px rgba(124, 184, 255, 0.3)';
                  e.target.style.transform = 'scale(1)';
                }}>
                  Sign In
                </Link>
              </>
            ) : (
              <>
                <Link href="/evomanias/players" style={{
                  padding: '1rem 3rem',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                  color: '#fff',
                  border: '2px solid transparent',
                  borderRadius: '0',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 20px rgba(255, 107, 107, 0.6)'
                }} onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 40px rgba(255, 107, 107, 0.9)';
                  e.target.style.transform = 'scale(1.05)';
                }} onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.6)';
                  e.target.style.transform = 'scale(1)';
                }}>
                  View Leaderboards
                </Link>
              </>
            )}
          </div>

          {/* Server Stats Bar - Bottom of hero */}
          <div style={{
            position: 'absolute',
            bottom: '3rem',
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            animation: 'slideInUp 1s ease-out 0.8s both'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#7cb8ff',
                textShadow: '0 0 20px rgba(124, 184, 255, 0.8)'
              }}>
                {serverStats.status === 'Online' ? '🟢' : '🔴'}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginTop: '0.5rem',
                textTransform: 'uppercase'
              }}>
                Server {serverStats.status}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#7cb8ff',
                textShadow: '0 0 20px rgba(124, 184, 255, 0.8)'
              }}>
                {serverStats.onlinePlayers}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginTop: '0.5rem',
                textTransform: 'uppercase'
              }}>
                Warriors Online
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#7cb8ff',
                textShadow: '0 0 20px rgba(124, 184, 255, 0.8)'
              }}>
                {serverStats.totalCharacters}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginTop: '0.5rem',
                textTransform: 'uppercase'
              }}>
                Total Characters
              </div>
            </div>
          </div>
        </section>

        {/* TOP PLAYERS SECTION */}
        <section style={{
          padding: '6rem 2rem',
          background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.5) 0%, rgba(26, 26, 62, 0.8) 100%)',
          borderTop: '2px solid rgba(124, 184, 255, 0.3)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '3rem',
              background: 'linear-gradient(135deg, #7cb8ff 0%, #ff6b6b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              🏆 Elite Warriors 🏆
            </h2>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '3rem', fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Loading champions...
              </div>
            ) : topPlayers.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                The leaderboard awaits worthy competitors...
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
              }}>
                {topPlayers.map((player, idx) => (
                  <Link
                    key={player.id}
                    href={`/evomanias/character/${player.id}`}
                    style={{
                      background: `linear-gradient(135deg, rgba(${idx === 0 ? '255, 215, 0' : '124, 184, 255'}, 0.1) 0%, rgba(${idx === 0 ? '255, 215, 0' : '90, 159, 230'}, 0.05) 100%)`,
                      border: `2px solid ${idx === 0 ? '#ffd700' : 'rgba(124, 184, 255, 0.3)'}`,
                      padding: '1.5rem',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      color: '#fff',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 30px ${idx === 0 ? 'rgba(255, 215, 0, 0.6)' : 'rgba(124, 184, 255, 0.6)'}`;
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{
                        fontSize: '2rem',
                        fontWeight: 900,
                        color: idx === 0 ? '#ffd700' : '#7cb8ff',
                        minWidth: '40px'
                      }}>
                        {idx === 0 ? '👑' : `#${idx + 1}`}
                      </span>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '1.3rem',
                          fontWeight: 700,
                          color: '#fff'
                        }}>
                          {player.name}
                        </div>
                        <div style={{
                          fontSize: '0.9rem',
                          color: 'rgba(255, 255, 255, 0.7)'
                        }}>
                          {vocations[player.vocation] || '⚔️'} Level {player.level}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(124, 184, 255, 0.2)'
                    }}>
                      EXP: {player.experience?.toLocaleString() || '0'}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* NEWS SECTION */}
        {announcements.length > 0 && (
          <section style={{
            padding: '6rem 2rem',
            background: 'linear-gradient(180deg, rgba(26, 26, 62, 0.5) 0%, rgba(10, 14, 39, 0.8) 100%)',
            borderTop: '2px solid rgba(139, 69, 19, 0.3)'
          }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontWeight: 900,
                textAlign: 'center',
                marginBottom: '3rem',
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                📜 Battle Chronicles 📜
              </h2>

              <div style={{ display: 'grid', gap: '2rem' }}>
                {announcements.slice(0, 5).map((post) => (
                  <div
                    key={post.id}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(255, 165, 0, 0.05) 100%)',
                      border: '1px solid rgba(255, 165, 0, 0.3)',
                      padding: '2rem',
                      borderRadius: '4px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 165, 0, 0.4)';
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#ffa500',
                      marginBottom: '0.5rem'
                    }}>
                      {post.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      marginBottom: '1rem'
                    }}>
                      {post.content}
                    </p>
                    <div style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>
                      By <strong>{post.author}</strong> • {new Date(post.created).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <section style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)',
          borderTop: '2px solid rgba(124, 184, 255, 0.3)'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '1rem',
              color: '#7cb8ff'
            }}>
              Join The Evolution
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1.1rem',
              marginBottom: '2rem'
            }}>
              Create your legend today and become part of the ultimate MMORPG experience.
            </p>
            {!account && (
              <Link href="/evomanias/register" style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
                color: '#000',
                border: 'none',
                borderRadius: '0',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 20px rgba(124, 184, 255, 0.6)'
              }} onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 40px rgba(124, 184, 255, 0.9)';
                e.target.style.transform = 'scale(1.05)';
              }} onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 20px rgba(124, 184, 255, 0.6)';
                e.target.style.transform = 'scale(1)';
              }}>
                Start Your Journey
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
