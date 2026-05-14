'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Filters from './components/Filters';
import ViewToggle from './components/ViewToggle';
import ServerCard from './components/ServerCard';
import ServerList from './components/ServerList';
import Pagination from './components/Pagination';
import { fetchServers } from '@/lib/supabase';

const PAGE_SIZE = 12;

export default function Home() {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalServers, setTotalServers] = useState(0);
  const [view, setView] = useState('table');
  const [filters, setFilters] = useState({});
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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
    loadServers();
  }, [currentPage, filters]);

  const loadServers = async () => {
    setLoading(true);
    setError(null);
    try {
      const { servers: data, total, error: fetchError } = await fetchServers(
        filters,
        currentPage,
        PAGE_SIZE
      );

      if (fetchError) {
        setError('Failed to load servers. Please check your Supabase connection.');
        setServers([]);
      } else {
        setServers(data);
        setTotalServers(total);
      }
    } catch (err) {
      setError('An error occurred while fetching servers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSearch = (searchTerm) => {
    setFilters(prev => ({ ...prev, search: searchTerm }));
    setCurrentPage(1);
  };

  return (
    <main style={{ minHeight: '100vh', background: '#ffffff', color: '#1f2937', overflow: 'hidden', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-40px) translateX(15px); }
          50% { transform: translateY(-70px) translateX(-8px); }
          75% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInDown { from { opacity: 0; transform: translateY(-100px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(100px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        * { box-sizing: border-box; }
      `}</style>

      {/* Subtle Background */}
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
            radial-gradient(ellipse at 20% 50%, rgba(245, 245, 245, 0.8) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(250, 250, 250, 0.8) 0%, transparent 50%),
            linear-gradient(180deg, #ffffff 0%, #fafafa 40%, #f5f5f5 100%)
          `
        }} />

        <div style={{
          position: 'absolute',
          width: '1200px',
          height: '1200px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 100%)',
          borderRadius: '50%',
          left: mousePos.x - 600,
          top: mousePos.y - 600,
          transition: 'all 0.5s ease-out',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />

        {/* HERO SECTION */}
        <section style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.8rem, 10vw, 5rem)',
            fontWeight: 300,
            margin: '0 0 1rem 0',
            lineHeight: 1.1,
            color: '#1f2937',
            letterSpacing: '2px',
            animation: 'slideInDown 1.2s ease-out 0.1s both'
          }}>
            Premium Tibia Servers
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 400,
            color: 'rgba(71, 85, 105, 0.75)',
            margin: '0.5rem 0 2.5rem 0',
            maxWidth: '700px',
            lineHeight: 1.6,
            letterSpacing: '0.5px',
            animation: 'fadeIn 1.5s ease-out 0.7s both'
          }}>
            Discover the finest curated servers. Play where excellence meets community.
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'zoomIn 1s ease-out 1.1s both'
          }}>
            <Link href="#servers" style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              background: '#1f2937',
              color: '#ffffff',
              border: 'none',
              borderRadius: '2px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
              display: 'inline-block'
            }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.85';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
              }}
            >
              Explore Servers
            </Link>
            <Link href="/evomanias" style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              background: 'rgba(31, 41, 55, 0.06)',
              color: '#1f2937',
              border: '1.5px solid rgba(31, 41, 55, 0.2)',
              borderRadius: '2px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
              display: 'inline-block'
            }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.85';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
              }}
            >
              Evomanias
            </Link>
          </div>

          <div style={{
            position: 'absolute',
            bottom: '3rem',
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            animation: 'slideInUp 1s ease-out 1.2s both'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                {totalServers || '∞'}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(71, 85, 105, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Servers</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(31, 41, 55, 0.1)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                Premium
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(71, 85, 105, 0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quality Curated</div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT SECTION */}
        <section id="servers" style={{
          padding: '6rem 2rem',
          background: 'rgba(250, 250, 250, 0.5)',
          borderTop: '1px solid rgba(31, 41, 55, 0.08)',
          position: 'relative'
        }}>
          <div className="max-w-7xl mx-auto">
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: 300,
                textAlign: 'center',
                marginBottom: '1rem',
                color: '#1f2937',
                letterSpacing: '1px'
              }}>
                {servers.length > 0 ? `${totalServers} Premium Servers` : 'Discover Servers'}
              </h2>
              {filters.search && (
                <p style={{ textAlign: 'center', color: 'rgba(71, 85, 105, 0.6)', fontSize: '0.95rem' }}>Searching: "{filters.search}"</p>
              )}
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <Filters onFiltersChange={handleFiltersChange} onSearch={handleSearch} />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div style={{ flex: 1 }} />
              <ViewToggle view={view} onViewChange={setView} />
            </div>

            {error && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#991b1b',
                padding: '1rem 1.5rem',
                borderRadius: '2px',
                marginBottom: '2rem',
                fontSize: '0.95rem'
              }}>
                {error}
              </div>
            )}

            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingY: '5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    border: '2px solid rgba(31, 41, 55, 0.1)',
                    borderTop: '2px solid #1f2937',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 1rem'
                  }} />
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  <p style={{ color: 'rgba(71, 85, 105, 0.6)', fontSize: '0.95rem' }}>Loading premium servers...</p>
                </div>
              </div>
            ) : servers.length === 0 ? (
              <div style={{
                background: 'rgba(31, 41, 55, 0.04)',
                border: '1px solid rgba(31, 41, 55, 0.1)',
                borderRadius: '2px',
                padding: '3rem',
                textAlign: 'center'
              }}>
                <p style={{ color: '#1f2937', marginBottom: '1.5rem' }}>No servers match your filters</p>
                <button
                  onClick={() => {
                    setFilters({});
                    setCurrentPage(1);
                  }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: '#1f2937',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '2px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.85';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1';
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : view === 'grid' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {servers.map(server => (
                    <ServerCard key={server.id} server={server} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalItems={totalServers}
                  pageSize={PAGE_SIZE}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <>
                <div style={{ border: '1px solid rgba(31, 41, 55, 0.1)', borderRadius: '2px', overflow: 'hidden', marginBottom: '2rem' }}>
                  <ServerList servers={servers} />
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalItems={totalServers}
                  pageSize={PAGE_SIZE}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
