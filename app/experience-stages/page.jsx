'use client';

export const dynamic = 'force-dynamic';

import { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import './experience-stages.css';
import stagesData from '@/public/data/stages.json';

export default function ExperienceStagesPage() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'chart'

  const stages = stagesData.stages || [];

  // Calculate progression stats
  const stats = useMemo(() => {
    if (stages.length === 0) return { maxLevel: 0, totalStages: 0 };

    const maxLevel = stages[stages.length - 1].maxLevel || 5000;
    const totalStages = stages.length;
    const avgMultiplier = stages.reduce((sum, s) => sum + s.multiplier, 0) / totalStages;

    return { maxLevel, totalStages, avgMultiplier };
  }, [stages]);

  // Find level category
  const getLevelCategory = (level) => {
    if (level <= 100) return 'Beginner (1-100)';
    if (level <= 300) return 'Early (101-300)';
    if (level <= 700) return 'Mid Game (301-700)';
    if (level <= 1000) return 'Advanced (701-1000)';
    if (level <= 1200) return 'Elite (1001-1200)';
    if (level <= 1500) return 'Expert (1201-1500)';
    if (level <= 2000) return 'Master (1501-2000)';
    if (level <= 2500) return 'Legendary (2001-2500)';
    return 'Ultimate (2500+)';
  };

  const getMultiplierColor = (multiplier) => {
    if (multiplier >= 30) return 'from-green-500 to-green-700';
    if (multiplier >= 15) return 'from-blue-500 to-blue-700';
    if (multiplier >= 5) return 'from-purple-500 to-purple-700';
    if (multiplier >= 1) return 'from-yellow-500 to-yellow-700';
    if (multiplier >= 0.1) return 'from-orange-500 to-orange-700';
    return 'from-red-500 to-red-700';
  };

  const getMultiplierLabel = (multiplier) => {
    if (multiplier >= 30) return 'Maximum';
    if (multiplier >= 15) return 'High';
    if (multiplier >= 5) return 'Good';
    if (multiplier >= 1) return 'Moderate';
    if (multiplier >= 0.1) return 'Low';
    return 'Minimal';
  };

  const getTotalExpForLevel = (targetLevel) => {
    let totalExp = 0;
    let currentExp = 50; // Base experience

    for (let lvl = 1; lvl < targetLevel; lvl++) {
      totalExp += currentExp;
      currentExp *= 1.05; // Rough approximation
    }

    return Math.floor(totalExp);
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Climb the Ladder</span>
          <h1>Experience Stages</h1>
          <p>
            Evolisca's experience progression spans 13 distinct stages, from the explosive early growth
            at level 1 to the brutal endgame grind at level 5000+. Each stage defines the rhythm of your journey,
            the rewards available, and the challenges you'll face. Understand the curve. Master the grind.
          </p>
          <div className="hero-actions">
            <a href="https://evolisca.com" target="_blank" rel="noreferrer" className="button-primary">
              Start Your Journey
            </a>
            <Link href="/vocations" className="button-secondary">
              Vocations
            </Link>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Quick Facts</span>
            <h2>Progression Overview</h2>
          </div>
          <div className="side-content">
            <div className="fact-item">
              <div className="fact-label">Max Level</div>
              <div className="fact-value">{stats.maxLevel.toLocaleString()}</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Total Stages</div>
              <div className="fact-value">{stats.totalStages}</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Starting Exp</div>
              <div className="fact-value">60x Multiplier</div>
            </div>
            <div className="fact-item">
              <div className="fact-label">Endgame Exp</div>
              <div className="fact-value">0.0015x Multiplier</div>
            </div>
          </div>
        </aside>
      </section>

      {/* View Mode Toggle */}
      <section className="content-section">
        <div className="view-toggle panel">
          <button
            className={`toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
          >
            <BarChart3 size={18} />
            Table View
          </button>
          <button
            className={`toggle-btn ${viewMode === 'chart' ? 'active' : ''}`}
            onClick={() => setViewMode('chart')}
          >
            <Zap size={18} />
            Chart View
          </button>
        </div>
      </section>

      {/* Table View */}
      {viewMode === 'table' && (
        <section className="content-section">
          <div className="section-header">
            <h2>Experience Stages Overview</h2>
            <p>Expand any stage for detailed information and gameplay notes</p>
          </div>

          <div className="table-container panel">
            <table className="stages-table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Level Range</th>
                  <th>Progression Tier</th>
                  <th>Experience Multiplier</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((stage, index) => {
                  const minLevel = stage.minLevel;
                  const maxLevel = stage.maxLevel;
                  const multiplier = stage.multiplier;
                  const category = getLevelCategory(minLevel);
                  const label = getMultiplierLabel(multiplier);

                  return (
                    <tr
                      key={index}
                      className={`stage-row ${selectedLevel === minLevel ? 'selected' : ''}`}
                      onClick={() => setSelectedLevel(selectedLevel === minLevel ? null : minLevel)}
                    >
                      <td className="stage-number">
                        <span className="badge-number">{index + 1}</span>
                      </td>
                      <td className="level-range">
                        {minLevel} → {maxLevel}
                      </td>
                      <td className="progression-tier">
                        {category}
                      </td>
                      <td className="multiplier">
                        <span className="multiplier-value">{multiplier}x</span>
                      </td>
                      <td>
                        <span className={`multiplier-badge ${label.toLowerCase().replace(' ', '-')}`}>
                          {label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Expanded Details */}
          {selectedLevel !== null && (
            <section className="expanded-details">
              {stages.map((stage, stageIndex) => {
                if (stage.minLevel !== selectedLevel) return null;

                const levelCount = stage.maxLevel - stage.minLevel + 1;

                return (
                  <div key={stage.minLevel} className="detail-card panel">
                    <div className="detail-header">
                      <h3>Stage {stageIndex + 1} Details</h3>
                      <span className="detail-badge">{getLevelCategory(stage.minLevel)}</span>
                    </div>

                    <div className="detail-grid">
                      <div className="detail-item">
                        <label>Level Range</label>
                        <span className="value">{stage.minLevel} - {stage.maxLevel}</span>
                      </div>
                      <div className="detail-item">
                        <label>Total Levels</label>
                        <span className="value">{levelCount}</span>
                      </div>
                      <div className="detail-item">
                        <label>Exp Multiplier</label>
                        <span className="value">{stage.multiplier}x</span>
                      </div>
                      <div className="detail-item">
                        <label>Grade</label>
                        <span className={`value grade ${getMultiplierLabel(stage.multiplier).toLowerCase().replace(' ', '-')}`}>
                          {getMultiplierLabel(stage.multiplier)}
                        </span>
                      </div>
                    </div>

                    <div className="gameplay-info">
                      <h4>Gameplay Progression</h4>
                      <p>{getGameplayNotes(stage.minLevel)}</p>
                    </div>
                  </div>
                );
              })}
            </section>
          )}
        </section>
      )}

      {/* Chart View */}
      {viewMode === 'chart' && (
        <section className="content-section">
          <div className="section-header">
            <h2>Experience Curve Visualization</h2>
            <p>See how experience multipliers decrease as you progress</p>
          </div>

          <div className="chart-container panel">
            <div className="chart-bars">
              {stages.map((stage, index) => {
                const maxMultiplier = 60;
                const percentage = (stage.multiplier / maxMultiplier) * 100;
                const label = getMultiplierLabel(stage.multiplier);

                return (
                  <div key={index} className="bar-group">
                    <div
                      className={`bar bar-${label.toLowerCase().replace(' ', '-')}`}
                      style={{ height: `${Math.max(percentage, 5)}%` }}
                      title={`Stage ${index + 1}: ${stage.multiplier}x`}
                    >
                      <span className="bar-label">{stage.multiplier}x</span>
                    </div>
                    <div className="bar-info">
                      <span className="bar-range">{stage.minLevel}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="chart-legend panel">
            <div className="legend-header">
              <h3>Experience Rate Grades</h3>
            </div>
            <div className="legend-items">
              <div className="legend-item">
                <div className="legend-color maximum" />
                <span>Maximum (30x-60x) - Explosive early growth</span>
              </div>
              <div className="legend-item">
                <div className="legend-color high" />
                <span>High (15x-30x) - Strong progression</span>
              </div>
              <div className="legend-item">
                <div className="legend-color good" />
                <span>Good (5x-15x) - Solid mid-game pace</span>
              </div>
              <div className="legend-item">
                <div className="legend-color moderate" />
                <span>Moderate (1x-5x) - Slowing advancement</span>
              </div>
              <div className="legend-item">
                <div className="legend-color low" />
                <span>Low (0.1x-1x) - Steep endgame grind</span>
              </div>
              <div className="legend-item">
                <div className="legend-color minimal" />
                <span>Minimal (&lt;0.1x) - Ultimate endgame</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Progressive Strategy Guide */}
      <section className="content-section">
        <div className="section-header">
          <h2>Progression Phases</h2>
          <p>Adapt your strategy to each phase of the game</p>
        </div>

        <div className="strategy-cards">
          <div className="strategy-card panel">
            <div className="strategy-icon">
              <TrendingUp size={32} />
            </div>
            <h3>Levels 1-300: Foundation</h3>
            <p>Explosive 60x-45x multipliers. Grind relentlessly. Master your vocation's fundamentals and build core equipment.</p>
          </div>

          <div className="strategy-card panel">
            <div className="strategy-icon">
              <Zap size={32} />
            </div>
            <h3>Levels 301-700: Growth</h3>
            <p>Moderate 30x-8x multipliers. Perfect advanced rotations. Engage dungeons and begin PvP tournaments.</p>
          </div>

          <div className="strategy-card panel">
            <div className="strategy-icon">
              <TrendingDown size={32} />
            </div>
            <h3>Levels 701+: Endgame</h3>
            <p>Brutal &lt;5x multipliers. Focus on raid rewards and PvP dominance. Pursue legendary achievements and build your legacy.</p>
          </div>
        </div>
      </section>

    </main>
  );
}

function getGameplayNotes(level) {
  if (level <= 100) {
    return 'Excellent farming zone for beginners. Focus on grinding basic creatures and learning your vocation\'s fundamentals. Join group hunts for faster progression and social engagement.';
  }
  if (level <= 300) {
    return 'Prime leveling phase with great exp rates. Participate in dungeon runs and skill challenges. Start accumulating better equipment and building wealth for future investments.';
  }
  if (level <= 700) {
    return 'Competitive progression continues. Engage in mid-tier dungeons and PvP tournaments. Build your reputation and participate in guild wars for dynamic combat experience.';
  }
  if (level <= 1000) {
    return 'Significant skill requirement begins. Advanced dungeon tactics become essential. Begin specializing in your vocation\'s optimal build and playstyle for maximum effectiveness.';
  }
  if (level <= 1200) {
    return 'Elite territory. Experience gains slow considerably, shifting focus to rare drops and prestigious achievements. Compete at the highest levels of PvP and raid content.';
  }
  if (level <= 1500) {
    return 'Master-tier progression. Experience accumulation is very slow. Prioritize achievement hunting, rare legendary items, and serving as a mentor to younger players.';
  }
  return 'Endgame supremacy. Exp is nearly irrelevant. Focus entirely on legendary goals, PvP dominance, speedruns, and establishing your legacy in the game world.';
}
