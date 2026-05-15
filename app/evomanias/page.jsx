'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useEvomaniasAuth } from '../context/EvomaniasAuthContext';
import { useEvomaniasTheme } from './context/EvomaniasThemeContext';

export default function EvomaniasHome() {
  const { account } = useEvomaniasAuth();
  const { theme } = useEvomaniasTheme();
  const [topPlayers, setTopPlayers] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [serverStats, setServerStats] = useState({
    onlinePlayers: 0,
    totalCharacters: 0,
    status: 'Offline',
  });
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const isDark = theme === 'dark';

  useEffect(() => {
    setIsClient(true);
    setParticles([...Array(25)].map(() => ({
      width: Math.random() * 8 + 2,
      height: Math.random() * 8 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.6 + 0.2
    })));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    loadAllData();
  }, []);

  const fetchWithTimeout = async (url, timeout = 8000) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, { 
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' }
      });
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (err) {
      clearTimeout(timeoutId);
      console.error(`Fetch error for ${url}:`, err.message);
      throw err;
    }
  };

  const loadAllData = async () => {
    try {
      try {
        const statsData = await fetchWithTimeout('/api/evomanias/server-stats');
        setServerStats(statsData);
      } catch (err) {
        try {
          const mockData = await fetchWithTimeout('/api/evomanias/mock-data');
          setServerStats(mockData.serverStats);
        } catch {}
      }

      try {
        const playersData = await fetchWithTimeout('/api/evomanias/characters?action=highscores');
        setTopPlayers((playersData.characters || []).slice(0, 12));
      } catch (err) {
        try {
          const mockData = await fetchWithTimeout('/api/evomanias/mock-data');
          setTopPlayers((mockData.players.characters || []).slice(0, 12));
        } catch {}
      }

      try {
        const announcementsData = await fetchWithTimeout('/api/evomanias/announcements');
        setAnnouncements(announcementsData.announcements || []);
      } catch (err) {
        try {
          const mockData = await fetchWithTimeout('/api/evomanias/mock-data');
          setAnnouncements(mockData.announcements.announcements || []);
        } catch {}
      }
    } finally {
      setLoading(false);
    }
  };

  const vocations = {
    'Knight': 'WARRIOR',
    'Paladin': 'PALADIN',
    'Druid': 'DRUID',
    'Sorcerer': 'MAGE',
  };

  const ButtonStyle = (primary = true) => ({
    padding: primary ? '1.3rem 3.5rem' : '1.3rem 3.5rem',
    fontSize: '1.15rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '3px',
    background: primary
      ? buttonGradient
      : isDark ? 'rgba(37, 99, 235, 0.1)' : 'rgba(37, 99, 235, 0.08)',
    color: primary ? '#ffffff' : primaryColor,
    border: primary ? 'none' : `2px solid ${primaryColor}`,
    borderRadius: '2px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: primary
      ? `0 0 30px ${isDark ? 'rgba(37, 99, 235, 0.4)' : 'rgba(37, 99, 235, 0.3)'}`
      : `0 0 20px ${isDark ? 'rgba(37, 99, 235, 0.2)' : 'rgba(37, 99, 235, 0.1)'}`,
    display: 'inline-block'
  });

  const bgColor = isDark ? '#1a1a20' : '#ffffff';
  const textColor = isDark ? '#ffffff' : '#1f2937';
  const textSecondary = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(71, 85, 105, 0.6)';
  const cardBg = isDark ? 'rgba(30, 30, 35, 0.7)' : 'rgba(255, 255, 255, 0.95)';
  const cardBorder = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(71, 85, 105, 0.1)';
  const primaryColor = isDark ? '#7cb8ff' : '#2563eb';
  const buttonGradient = isDark
    ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
    : 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)';

  return (
    <div style={{
      minHeight: '100vh',
      background: bgColor,
      color: textColor,
      overflow: 'hidden',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <style>{`
        @keyframes float { 
          0%, 100% { transform: translateY(0px) translateX(0px); } 
          25% { transform: translateY(-40px) translateX(15px); }
          50% { transform: translateY(-70px) translateX(-8px); }
          75% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes pulse { 0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(37, 99, 235, 0.4); } 50% { transform: scale(1.1); box-shadow: 0 0 50px rgba(37, 99, 235, 0.8); } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-100px) rotateX(30deg); } to { opacity: 1; transform: translateY(0) rotateX(0deg); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(100px) rotateX(-30deg); } to { opacity: 1; transform: translateY(0) rotateX(0deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.7) rotateZ(5deg); } to { opacity: 1; transform: scale(1) rotateZ(0deg); } }
        @keyframes glow-pulse { 0%, 100% { text-shadow: 0 0 20px rgba(37, 99, 235, 0.5), 0 0 40px rgba(239, 68, 68, 0.3); } 50% { text-shadow: 0 0 40px rgba(37, 99, 235, 0.9), 0 0 80px rgba(239, 68, 68, 0.6); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        @keyframes glow-text { 0%, 100% { opacity: 0.8; text-shadow: 0 0 10px rgba(37, 99, 235, 0.5), 0 0 20px rgba(37, 99, 235, 0.3); } 50% { opacity: 1; text-shadow: 0 0 30px rgba(37, 99, 235, 1), 0 0 50px rgba(37, 99, 235, 0.6); } }
        @keyframes slide-right { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes reveal-lines { from { width: 0; } to { width: 100%; } }
        .battle-glow { animation: glow-text 3s ease-in-out infinite; }
        .epic-btn { animation: pulse 2.5s ease-in-out infinite; }
        * { box-sizing: border-box; }
      `}</style>

      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: bgColor
        }} />

        <div style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          background: 'transparent',
          animation: 'float 40s ease-in-out infinite',
          left: -scrollY * 0.3,
          top: -scrollY * 0.2
        }} />

        <div style={{
          position: 'absolute',
          width: '1200px',
          height: '1200px',
          background: isDark
            ? 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          left: mousePos.x - 600,
          top: mousePos.y - 600,
          transition: 'all 0.5s ease-out',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          opacity: isDark ? 0.6 : 0.4
        }} />

        {isClient && particles.map((p, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: p.width + 'px',
            height: p.height + 'px',
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.2))'
              : 'radial-gradient(circle, rgba(239, 68, 68, 0.6), rgba(239, 68, 68, 0.1))',
            borderRadius: '50%',
            left: p.left + '%',
            top: p.top + '%',
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: p.delay + 's',
            boxShadow: i % 2 === 0 
              ? '0 0 30px rgba(37, 99, 235, 0.9)'
              : '0 0 25px rgba(239, 68, 68, 0.8)',
            filter: `blur(${1 + i % 3}px)`,
            opacity: p.opacity
          }} />
        ))}

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(37, 99, 235, 0.02) 25%, rgba(37, 99, 235, 0.02) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.02) 75%, rgba(37, 99, 235, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(37, 99, 235, 0.02) 25%, rgba(37, 99, 235, 0.02) 26%, transparent 27%, transparent 74%, rgba(37, 99, 235, 0.02) 75%, rgba(37, 99, 235, 0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3
        }} />
      </div>

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* HERO 1: MAIN EPIC HERO */}
        <section style={{
          minHeight: '120vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150%',
            height: '150%',
            background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.5
          }} />

          <h1 style={{
            fontSize: 'clamp(3.5rem, 12vw, 6rem)',
            fontWeight: 300,
            margin: '0 0 1rem 0',
            lineHeight: 1,
            color: textColor,
            letterSpacing: '2px',
            animation: 'slideInDown 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both'
          }}>
            Evomanias
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 400,
            color: textSecondary,
            margin: '0.5rem 0 2.5rem 0',
            maxWidth: '700px',
            lineHeight: 1.6,
            letterSpacing: '0.5px',
            animation: 'fadeIn 1.5s ease-out 0.7s both'
          }}>
            A world of endless evolution and distinction
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'zoomIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s both'
          }}>
            {!account ? (
              <>
                <Link href="/evomanias/register" style={ButtonStyle(true)} className="epic-btn"
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1';
                  }}>
                  Begin
                </Link>
                <Link href="/evomanias/login" style={ButtonStyle(false)}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1';
                  }}>
                  Sign In
                </Link>
              </>
            ) : (
              <Link href="/evomanias/players" style={ButtonStyle(true)} className="epic-btn">
                Leaderboards
              </Link>
            )}
          </div>

          <div style={{
            position: 'absolute',
            bottom: '5rem',
            display: 'flex',
            gap: '4rem',
            justifyContent: 'center',
            animation: 'slideInUp 1s ease-out 1.2s both'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: serverStats.status === 'Online' ? '#10b981' : '#ef4444',
                boxShadow: `0 0 40px ${serverStats.status === 'Online' ? 'rgba(16, 185, 129, 0.8)' : 'rgba(239, 68, 68, 0.8)'}`,
                animation: 'pulse 2s ease-in-out infinite',
                margin: '0 auto'
              }} />
              <div style={{ fontSize: '0.95rem', color: textSecondary, marginTop: '1rem', textTransform: 'uppercase' }}>Server Status</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: textColor,
                textShadow: `0 2px 8px ${isDark ? 'rgba(37, 99, 235, 0.15)' : 'rgba(37, 99, 235, 0.1)'}`,
                letterSpacing: '1px'
              }}>
                {serverStats.onlinePlayers.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.95rem', color: textSecondary, marginTop: '0.5rem', textTransform: 'uppercase' }}>In Battle Now</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: textColor,
                textShadow: `0 2px 8px ${isDark ? 'rgba(239, 68, 68, 0.15)' : 'rgba(239, 68, 68, 0.1)'}`,
                letterSpacing: '1px'
              }}>
                {serverStats.totalCharacters.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.95rem', color: textSecondary, marginTop: '0.5rem', textTransform: 'uppercase' }}>Total Legends</div>
            </div>
          </div>
        </section>



        {/* TOP WARRIORS SECTION */}
        <section style={{
          padding: '8rem 2rem',
          background: bgColor,
          borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(71, 85, 105, 0.08)'}`,
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 7vw, 4rem)',
              fontWeight: 300,
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: textColor,
              letterSpacing: '2px'
            }}>
              Elite Players
            </h2>
            <p style={{
              fontSize: '1rem',
              textAlign: 'center',
              color: textSecondary,
              marginBottom: '3rem',
              letterSpacing: '0.5px'
            }}>
              The world's finest
            </p>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '4rem', fontSize: '1.2rem', color: textSecondary }}>
                Loading...
              </div>
            ) : topPlayers.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem', fontSize: '1.2rem', color: textSecondary }}>
                No players yet
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {topPlayers.slice(0, 12).map((player, idx) => (
                  <Link
                    key={player.id}
                    href={`/evomanias/character/${player.id}`}
                    style={{
                      background: idx === 0
                        ? isDark
                          ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 165, 0, 0.04))'
                          : 'linear-gradient(135deg, rgba(255, 215, 0, 0.06), rgba(255, 165, 0, 0.03))'
                        : cardBg,
                      border: `2px solid ${idx === 0 ? (isDark ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 215, 0, 0.2)') : cardBorder}`,
                      padding: '2rem',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      color: textColor,
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.opacity = '0.95';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.opacity = '1';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                      <span style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        color: idx === 0 ? '#ffd700' : primaryColor,
                        minWidth: '60px'
                      }}>
                        #{idx + 1}
                      </span>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          color: textColor,
                          marginBottom: '0.25rem'
                        }}>
                          {player.name}
                        </div>
                        <div style={{ fontSize: '0.95rem', color: textSecondary }}>
                          {vocations[player.vocation] || 'WARRIOR'} • Level {player.level}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: textSecondary,
                      marginTop: 'auto',
                      paddingTop: '1rem',
                      borderTop: `1px solid ${isDark ? 'rgba(37, 99, 235, 0.1)' : 'rgba(37, 99, 235, 0.08)'}`
                    }}>
                      EXP: <strong>{(player.experience || 0).toLocaleString()}</strong>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/evomanias/players" style={ButtonStyle(true)} className="epic-btn">
                View All
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
