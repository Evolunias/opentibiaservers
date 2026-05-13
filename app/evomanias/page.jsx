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
  const [particles, setParticles] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
      ? 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)'
      : 'rgba(124, 184, 255, 0.1)',
    color: primary ? '#000814' : '#7cb8ff',
    border: primary ? 'none' : '2px solid #7cb8ff',
    borderRadius: '2px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: primary
      ? '0 0 30px rgba(124, 184, 255, 0.7)'
      : '0 0 20px rgba(124, 184, 255, 0.4)',
    display: 'inline-block'
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000814',
      color: '#fff',
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
        @keyframes pulse { 0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(124, 184, 255, 0.4); } 50% { transform: scale(1.1); box-shadow: 0 0 50px rgba(124, 184, 255, 0.8); } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-100px) rotateX(30deg); } to { opacity: 1; transform: translateY(0) rotateX(0deg); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(100px) rotateX(-30deg); } to { opacity: 1; transform: translateY(0) rotateX(0deg); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.7) rotateZ(5deg); } to { opacity: 1; transform: scale(1) rotateZ(0deg); } }
        @keyframes glow-pulse { 0%, 100% { text-shadow: 0 0 20px rgba(124, 184, 255, 0.5), 0 0 40px rgba(255, 107, 107, 0.3); } 50% { text-shadow: 0 0 40px rgba(124, 184, 255, 0.9), 0 0 80px rgba(255, 107, 107, 0.6); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        @keyframes glow-text { 0%, 100% { opacity: 0.8; text-shadow: 0 0 10px rgba(124, 184, 255, 0.5), 0 0 20px rgba(124, 184, 255, 0.3); } 50% { opacity: 1; text-shadow: 0 0 30px rgba(124, 184, 255, 1), 0 0 50px rgba(124, 184, 255, 0.6); } }
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
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(25, 25, 112, 0.15) 0%, transparent 50%),
            linear-gradient(180deg, #0a0e27 0%, #1a1a3e 40%, #0f1428 100%)
          `,
          filter: 'blur(2px)'
        }} />

        <div style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          background: `
            radial-gradient(circle at 30% 40%, rgba(255, 107, 107, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(124, 184, 255, 0.05) 0%, transparent 40%)
          `,
          animation: 'float 40s ease-in-out infinite',
          left: -scrollY * 0.3,
          top: -scrollY * 0.2
        }} />

        <div style={{
          position: 'absolute',
          width: '1200px',
          height: '1200px',
          background: 'radial-gradient(circle, rgba(124, 184, 255, 0.15) 0%, rgba(255, 107, 107, 0.08) 50%, transparent 100%)',
          borderRadius: '50%',
          left: mousePos.x - 600,
          top: mousePos.y - 600,
          transition: 'all 0.5s ease-out',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }} />

        {isClient && particles.map((p, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: p.width + 'px',
            height: p.height + 'px',
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(124, 184, 255, 0.8), rgba(124, 184, 255, 0.2))'
              : 'radial-gradient(circle, rgba(255, 107, 107, 0.6), rgba(255, 107, 107, 0.1))',
            borderRadius: '50%',
            left: p.left + '%',
            top: p.top + '%',
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: p.delay + 's',
            boxShadow: i % 2 === 0 
              ? '0 0 30px rgba(124, 184, 255, 0.9)'
              : '0 0 25px rgba(255, 107, 107, 0.8)',
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
            linear-gradient(0deg, transparent 24%, rgba(124, 184, 255, 0.02) 25%, rgba(124, 184, 255, 0.02) 26%, transparent 27%, transparent 74%, rgba(124, 184, 255, 0.02) 75%, rgba(124, 184, 255, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(124, 184, 255, 0.02) 25%, rgba(124, 184, 255, 0.02) 26%, transparent 27%, transparent 74%, rgba(124, 184, 255, 0.02) 75%, rgba(124, 184, 255, 0.02) 76%, transparent 77%, transparent)
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
            background: 'radial-gradient(ellipse at center, rgba(124, 184, 255, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }} />

          <h1 style={{
            fontSize: 'clamp(3rem, 20vw, 10rem)',
            fontWeight: 900,
            margin: '0 0 1.5rem 0',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 30%, #ff6b6b 70%, #ffa500 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-3px',
            textTransform: 'uppercase',
            animation: 'slideInDown 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both'
          }} className="battle-glow">
            EVOMANIAS
          </h1>

          <p style={{
            fontSize: 'clamp(1.4rem, 5vw, 2.8rem)',
            fontWeight: 800,
            color: '#ff8c42',
            margin: '1.5rem 0 2rem 0',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            textShadow: '0 0 30px rgba(255, 140, 66, 0.6)',
            maxWidth: '900px',
            lineHeight: 1.2,
            animation: 'slideInUp 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both'
          }}>
            From Humble Beginnings to LEGENDARY POWER
          </p>

          <div style={{
            height: '3px',
            width: '250px',
            background: 'linear-gradient(90deg, transparent, #7cb8ff, #ff8c42, transparent)',
            margin: '1.5rem auto 2rem',
            animation: 'slideInDown 1s ease-out 0.5s both'
          }} />

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            marginBottom: '2rem',
            lineHeight: 1.8,
            fontWeight: 400,
            animation: 'fadeIn 1.5s ease-out 0.7s both'
          }}>
            A revolution in MMORPG gaming where YOU evolve, YOU conquer, and YOU become a legend. Experience a world where every battle matters, every choice defines your destiny, and only the strongest rise to glory.
          </p>

          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '750px',
            marginBottom: '3rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
            animation: 'fadeIn 2s ease-out 0.9s both'
          }}>
            COMING FROM A WORLD BUILT ON EVOLUTION. ENTER A REALM WHERE LEGENDS ARE FORGED IN BATTLE.
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
                    e.target.style.boxShadow = '0 0 60px rgba(124, 184, 255, 1)';
                    e.target.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 0 30px rgba(124, 184, 255, 0.7)';
                    e.target.style.transform = 'scale(1)';
                  }}>
                  Start Your Legend
                </Link>
                <Link href="/evomanias/login" style={ButtonStyle(false)}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(124, 184, 255, 0.2)';
                    e.target.style.boxShadow = '0 0 50px rgba(124, 184, 255, 0.8)';
                    e.target.style.transform = 'scale(1.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(124, 184, 255, 0.1)';
                    e.target.style.boxShadow = '0 0 20px rgba(124, 184, 255, 0.4)';
                    e.target.style.transform = 'scale(1)';
                  }}>
                  Return Warrior
                </Link>
              </>
            ) : (
              <Link href="/evomanias/players" style={ButtonStyle(true)} className="epic-btn">
                Enter Leaderboards
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
                fontSize: '4rem',
                fontWeight: 900,
                color: '#00d97e',
                textShadow: '0 0 30px rgba(0, 217, 126, 0.8)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                LIVE
              </div>
              <div style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.5rem', textTransform: 'uppercase' }}>Server Status</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #7cb8ff, #5a9fe6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {serverStats.onlinePlayers.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.5rem', textTransform: 'uppercase' }}>In Battle Now</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #ff6b6b, #ffa500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {serverStats.totalCharacters.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.5rem', textTransform: 'uppercase' }}>Total Legends</div>
            </div>
          </div>
        </section>

        {/* FEATURE 1: EVOLUTION SYSTEM */}
        <section style={{
          padding: '8rem 2rem',
          background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.7) 0%, rgba(26, 26, 62, 0.9) 100%)',
          borderTop: '2px solid rgba(124, 184, 255, 0.3)',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 7vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #7cb8ff 0%, #ff8c42 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Evolution System
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'rgba(255, 255, 255, 0.85)',
              textAlign: 'center',
              marginBottom: '3rem',
              lineHeight: 1.8,
              maxWidth: '900px',
              margin: '0 auto 3rem'
            }}>
              Your warrior grows stronger with every battle. Watch as your character evolves beyond imagination, unlocking new abilities, transforming your appearance, and gaining powers never before seen. This isn't just leveling—this is EVOLUTION.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {['Skill Mastery', 'Power Ascension', 'Form Transformation', 'Ultimate Abilities'].map((feature, i) => (
                <div key={i} style={{
                  background: 'linear-gradient(135deg, rgba(124, 184, 255, 0.1), rgba(255, 107, 107, 0.05))',
                  border: '2px solid rgba(124, 184, 255, 0.3)',
                  padding: '2rem',
                  borderRadius: '4px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(124, 184, 255, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#7cb8ff', marginBottom: '1rem' }}>{feature}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Unlock legendary powers that reshape your combat prowess</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE 2: EPIC PVP */}
        <section style={{
          padding: '8rem 2rem',
          background: 'linear-gradient(180deg, rgba(26, 26, 62, 0.7) 0%, rgba(10, 14, 39, 0.9) 100%)',
          borderTop: '2px solid rgba(255, 107, 107, 0.3)',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 7vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Legendary PvP Warfare
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'rgba(255, 255, 255, 0.85)',
              textAlign: 'center',
              marginBottom: '3rem',
              lineHeight: 1.8,
              maxWidth: '900px',
              margin: '0 auto 3rem'
            }}>
              Step into arenas where legends clash. Guild wars, arena battles, and open-world PvP create endless moments of glory and defeat. Claim your supremacy or fall to a mightier opponent. Every scar tells a story.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {['1v1 Duels', 'Guild Wars', 'Arena Tournaments', 'Faction Battles'].map((feature, i) => (
                <div key={i} style={{
                  background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 165, 0, 0.05))',
                  border: '2px solid rgba(255, 107, 107, 0.3)',
                  padding: '2rem',
                  borderRadius: '4px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 107, 107, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#ff8c42', marginBottom: '1rem' }}>{feature}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Test your might against worthy opponents</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOP WARRIORS SECTION */}
        <section style={{
          padding: '8rem 2rem',
          background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.8) 0%, rgba(26, 26, 62, 0.9) 100%)',
          borderTop: '2px solid rgba(124, 184, 255, 0.4)',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 7vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 40%, #ff6b6b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Hall of Legends
            </h2>
            <p style={{
              fontSize: '1.1rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '3rem'
            }}>
              The mightiest champions who have risen to supremacy
            </p>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '4rem', fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Loading legendary warriors...
              </div>
            ) : topPlayers.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem', fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                The leaderboard awaits your conquest...
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
                        ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 165, 0, 0.08))'
                        : 'linear-gradient(135deg, rgba(124, 184, 255, 0.12), rgba(90, 159, 230, 0.06))',
                      border: `2px solid ${idx === 0 ? 'rgba(255, 215, 0, 0.5)' : 'rgba(124, 184, 255, 0.4)'}`,
                      padding: '2rem',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      color: '#fff',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.boxShadow = idx === 0
                        ? '0 0 50px rgba(255, 215, 0, 0.6)'
                        : '0 0 50px rgba(124, 184, 255, 0.8)';
                      el.style.transform = 'translateY(-10px)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.boxShadow = 'none';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                      <span style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        color: idx === 0 ? '#ffd700' : '#7cb8ff',
                        minWidth: '60px'
                      }}>
                        #{idx + 1}
                      </span>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          color: '#fff',
                          marginBottom: '0.25rem'
                        }}>
                          {player.name}
                        </div>
                        <div style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                          {vocations[player.vocation] || 'WARRIOR'} • Level {player.level}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginTop: 'auto',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(124, 184, 255, 0.2)'
                    }}>
                      EXP: <strong>{(player.experience || 0).toLocaleString()}</strong>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/evomanias/players" style={ButtonStyle(true)} className="epic-btn">
                View Full Leaderboards
              </Link>
            </div>
          </div>
        </section>

        {/* BATTLE CHRONICLES */}
        {announcements.length > 0 && (
          <section style={{
            padding: '8rem 2rem',
            background: 'linear-gradient(180deg, rgba(26, 26, 62, 0.7) 0%, rgba(10, 14, 39, 0.9) 100%)',
            borderTop: '2px solid rgba(255, 165, 0, 0.3)',
            position: 'relative'
          }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: 'clamp(2.2rem, 7vw, 4rem)',
                fontWeight: 900,
                textAlign: 'center',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                Battle Chronicles
              </h2>
              <p style={{
                fontSize: '1.1rem',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '3rem'
              }}>
                Stories from the realm of eternal conflict
              </p>

              <div style={{ display: 'grid', gap: '2rem' }}>
                {announcements.slice(0, 4).map((post, idx) => (
                  <div
                    key={post.id}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.08), rgba(255, 165, 0, 0.04))',
                      border: '2px solid rgba(255, 165, 0, 0.35)',
                      padding: '2.5rem',
                      borderRadius: '4px',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      animation: `slide-right 0.8s ease-out ${idx * 0.1}s both`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 165, 0, 0.6)';
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '4px',
                      height: '100%',
                      background: 'linear-gradient(180deg, #ff8c42, #ff6b6b)'
                    }} />
                    <h3 style={{
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: '#ff8c42',
                      marginBottom: '1rem',
                      marginLeft: '1rem'
                    }}>
                      {post.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '1.05rem',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                      marginLeft: '1rem'
                    }}>
                      {post.content}
                    </p>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.5)',
                      marginLeft: '1rem'
                    }}>
                      By <strong style={{ color: 'rgba(255, 165, 0, 0.9)' }}>{post.author}</strong> · {new Date(post.created).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA - EPIC */}
        <section style={{
          padding: '10rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.95) 0%, rgba(0, 0, 0, 1) 100%)',
          borderTop: '3px solid rgba(124, 184, 255, 0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(124, 184, 255, 0.15), transparent 70%)',
            filter: 'blur(60px)'
          }} />

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 900,
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #7cb8ff 0%, #ff6b6b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: '0 0 40px rgba(124, 184, 255, 0.3)'
            }} className="battle-glow">
              Your Legend Awaits
            </h2>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '2rem',
              lineHeight: 1.8,
              fontWeight: 400
            }}>
              The gates of Evomanias stand open. Thousands have answered the call and claimed their destiny. Will you join them? The realm needs warriors of your caliber. The time for greatness is NOW.
            </p>

            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.65)',
              marginBottom: '3rem',
              fontStyle: 'italic',
              letterSpacing: '1px'
            }}>
              Limited server capacity. Slots fill fast. Legends are made TODAY.
            </p>

            {!account && (
              <>
                <Link href="/evomanias/register" style={{
                  padding: '1.5rem 4.5rem',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                  background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
                  color: '#000814',
                  border: 'none',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 50px rgba(124, 184, 255, 0.8)',
                  display: 'inline-block'
                }} className="epic-btn"
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 0 100px rgba(124, 184, 255, 1)';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 0 50px rgba(124, 184, 255, 0.8)';
                    e.target.style.transform = 'scale(1)';
                  }}>
                  Create Legend Now
                </Link>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '2.5rem'
                }}>
                  Already have an account? <Link href="/evomanias/login" style={{ color: '#7cb8ff', textDecoration: 'underline' }}>Sign in here</Link>
                </p>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
