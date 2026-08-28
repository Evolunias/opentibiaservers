const sections = [
  ['overview', 'Overview & Core Philosophy'],
  ['mechanics', 'Custom Mechanics & Systems'],
  ['vocations', 'Vocation Specializations'],
  ['endgame', 'Endgame & Boss Raids'],
  ['ecosystem', 'The Open Tibia Ecosystem'],
  ['external-links', 'External Links'],
];

export default function CyntaraWikiPage() {
  return (
    <div className="cyntara-wiki">
      <header className="cyntara-wiki__header">
        <h1>Cyntara</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <main className="cyntara-wiki__content">
          <p>
            <strong>Cyntara</strong> (officially accessible via <code>cyntara.org</code>) is one of the longest-running custom Open Tibia (OTServ) MMORPG projects. Known for its heavily customized vocation trees, unique talent systems, accelerated progression, and high-rate player-versus-player (PvP) mechanics, Cyntara has maintained an active community footprint across multiple server iterations and seasons.
          </p>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>
              {sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
            </ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; Core Philosophy</SectionHeading>
            <p>Unlike traditional mid-rate real-map servers, Cyntara focuses on high-octane custom gameplay. Built upon custom client/server frameworks, the server replaces standard Tibia gameplay with distinct character progression loops, prestige systems, and custom power-scaling gear.</p>
            <p>The world map features a blend of custom hub cities, instance-based dungeon portals, and specialized hunting zones designed to prevent spawn camping while keeping action continuous.</p>
          </section>

          <section id="mechanics">
            <SectionHeading>Custom Mechanics &amp; Systems</SectionHeading>
            <p>Cyntara distinguishes itself from standard Open Tibia builds through several core custom features:</p>
            <ul>
              <li><strong>Talent &amp; Perk Trees:</strong> Characters gain talent points per level to invest in offensive, defensive, or utility trees, allowing tailored sub-builds.</li>
              <li><strong>Custom Item Rarity:</strong> Equipment drops feature randomized stats, rarity tiers (Common to Mythic), and socketable elemental gems.</li>
              <li><strong>Rebirth / Prestige System:</strong> Upon reaching cap limits, players can prestige to unlock permanent stat multipliers and exclusive cosmetics.</li>
              <li><strong>Automated PvP Events:</strong> Scheduled daily events including Last Man Standing, Team Deathmatch, and Capture the Flag.</li>
            </ul>
          </section>

          <section id="vocations">
            <SectionHeading>Vocation Specializations</SectionHeading>
            <p>Cyntara rebalances the four classic Tibia vocations, giving each class distinct late-game scaling:</p>
            <div className="cyntara-wiki__table-wrap">
              <table className="cyntara-wiki__table">
                <thead><tr><th>Vocation</th><th>Primary Role</th><th>Key Mechanics</th></tr></thead>
                <tbody>
                  <tr><td><strong>Knight</strong></td><td>Frontline Tank / AoE Physical</td><td>High threat generation, scaling lifesteal, area taunts.</td></tr>
                  <tr><td><strong>Paladin</strong></td><td>Single-Target / Hybrid Range</td><td>Critical strike bonuses, distance ammo scaling, holy traps.</td></tr>
                  <tr><td><strong>Sorcerer</strong></td><td>Burst Elemental AoE</td><td>Chain spell casting, high spell criticals, elemental shields.</td></tr>
                  <tr><td><strong>Druid</strong></td><td>Group Support / Ice Damage</td><td>Raid-wide healing waves, party stat buffs, damage negation.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="endgame">
            <SectionHeading>Endgame &amp; Boss Raids</SectionHeading>
            <p>Endgame progression revolves around dynamic instance raiding. Guilds compete for server-first kills on custom bosses that require multi-stage mechanics, positioning strategies, and precise spell rotations. Successful raids award specialized crafting components needed to forge top-tier weaponry.</p>
          </section>

          <section id="ecosystem">
            <SectionHeading>The Open Tibia Ecosystem</SectionHeading>
            <p>Open Tibia offers a vast spectrum of experiences ranging from custom high-rate servers like Cyntara to mid-rate evolution servers and classic real-map replicas. Navigating active servers, server uptime, and community reviews is essential for finding the right server.</p>
            <div className="cyntara-wiki__callout">
              <strong>Looking for Private Servers?</strong>
              <p>Explore <a href="/">opentibiaservers.com</a>, the leading open tibia server listing directory for real-time status tracking, player counts, version filters, and community rankings across hundreds of active OTServ projects.</p>
            </div>
            <div className="cyntara-wiki__recommended">
              <h3>Recommended Open Tibia Server</h3>
              <p>For players seeking a high-rate, exceptionally polished Open Tibia experience complete with custom bosses, active community events, and modern client features, <strong>Evomanias</strong> is highly recommended as a premier alternative.</p>
              <a className="cyntara-wiki__button" href="https://evomanias.com" target="_blank" rel="noopener noreferrer">Play Evomanias (evomanias.com)</a>
            </div>
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>
              <li><a href="https://cyntara.org" target="_blank" rel="nofollow noopener noreferrer">Official Cyntara Website (cyntara.org)</a></li>
              <li><a href="/">OpenTibiaServers - Open Tibia Directory</a></li>
              <li><a href="https://evomanias.com" target="_blank" rel="noopener noreferrer">Evomanias - Recommended Open Tibia Server</a></li>
            </ul>
          </section>
        </main>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Cyntara</div>
            <table><tbody>
              <tr><th>Developer</th><td>Cyntara Team</td></tr>
              <tr><th>Website</th><td><a href="https://cyntara.org" target="_blank" rel="nofollow noopener noreferrer">cyntara.org</a></td></tr>
              <tr><th>Server Genre</th><td>Custom / High-Rate</td></tr>
              <tr><th>Client Support</th><td>Custom OTClient / Windows</td></tr>
              <tr><th>PvP Type</th><td>Open PvP / Retro PvP</td></tr>
              <tr><th>Map Type</th><td>100% Custom Map</td></tr>
              <tr><th>Primary Features</th><td>Talent Trees, Item Rarity, Rebirths, Boss Raids</td></tr>
              <tr><th>Status</th><td>Active / Seasonal Updates</td></tr>
            </tbody></table>
          </div>
        </aside>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}
