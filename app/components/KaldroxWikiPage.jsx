import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & Server Identity'],
  ['world', 'Global Map & PvP'],
  ['progression', 'Staged Progression & Rates'],
  ['systems', 'Systems & Community'],
  ['client', 'Client Safety & Getting Started'],
  ['sources', 'Sources & Current Verification'],
  ['external-links', 'External Links'],
];

const rateRows = [
  ['Experience', 'x70 at levels 1–25, decreasing to x0.3 at level 301+', 'Fast early progress with a slower long-term curve.'],
  ['Skill', 'x14', 'Confirm the current vocation and training formulas in the rules.'],
  ['Magic', 'x5', 'Confirm whether the rate changes by vocation or stage.'],
  ['Loot', 'x1', 'Standard advertised loot multiplier; verify individual drop tables.'],
  ['Spawn', 'x1', 'Standard advertised spawn multiplier; map density remains a separate question.'],
];

const systems = [
  ['Global Map base', 'Public profiles describe Kaldrox as a complete Global Map 8.60 world with quests, spawns, and NPCs configured.'],
  ['Large world scale', 'A third-party profile reports a 65,000 × 65,000 tile map with more than 191,000 monsters and 1,408 NPCs. Treat those counts as reported scale, not a live audit.'],
  ['VIP items', 'Public descriptions mention VIP items with special attributes. Exact bonuses, pricing, and availability should be checked in the current rules.'],
  ['Events and quests', 'The server is described as adding unique quests and varied events to the familiar global-map foundation.'],
  ['Support tickets', 'A ticket-based support path is publicly described, but the current contact channel should be taken from the official website.'],
  ['DDoS protection', 'Public listings advertise DDoS protection and 24/7 operation; uptime and incident history should be judged from dated observations.'],
];

export default function KaldroxWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="kaldrox">
      <header className="cyntara-wiki__header">
        <h1>Kaldrox</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong>Kaldrox</strong> is a Brazil-associated Open Tibia server built around the 8.60 client and a Global Map-style world. Its public profile is defined by staged experience, a long progression curve, and a large world that aims to preserve familiar Tibia geography while adding custom events and VIP progression.</p>
              <p>The directory record identifies <code>sv.kaldrox.com:7171</code>. This page uses Kaldrox as the canonical identity rather than the older listing title “The Best Global 8.60,” and separates public descriptions from details that require confirmation on the official site.</p>
            </div>
            <div className="w-full shrink-0 md:w-64">
              <ServerLogo server={{ name: 'Kaldrox', slug: 'kaldrox', host: 'sv.kaldrox.com' }} size="profile" />
            </div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; Server Identity</SectionHeading>
            <p>Kaldrox is presented publicly as a high-population 8.60 Global Map server rather than a short seasonal custom map. Its appeal is the combination of recognizable Tibia locations, a staged rate model, and additional events or VIP items layered over the global-map foundation.</p>
            <p>The available directory snapshot records an uptime signal of 99.67% and a historical peak of 2,863 players. These are useful activity indicators, not a guarantee of current availability or a promise that every world system is unchanged.</p>
            <div className="cyntara-wiki__callout"><strong>Identity note</strong><p>Older records may call this listing “The Best Global 8.60,” while the host and current server identity point to Kaldrox. The canonical profile uses <code>sv.kaldrox.com:7171</code> and the Kaldrox name.</p></div>
          </section>

          <section id="world">
            <SectionHeading>Global Map &amp; PvP</SectionHeading>
            <p>Public descriptions characterize Kaldrox as a complete Global Map 8.60 experience with standard quests, monster spawns, and NPC locations configured. That gives experienced Tibia players a familiar starting point, while the server’s custom events and progression systems provide reasons to explore beyond the basic map route.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Area or layer</th><th>What public sources describe</th><th>What to verify</th></tr></thead><tbody>
              <tr><th>Global Map</th><td>Global-map base with quests, spawns, and NPCs.</td><td>Current map version, configured quests, and known exclusions.</td></tr>
              <tr><th>Open PvP</th><td>Listing data classifies Kaldrox as PVP.</td><td>Protection zones, skull rules, war rules, and level restrictions.</td></tr>
              <tr><th>Custom content</th><td>Unique quests, events, and VIP item progression are advertised.</td><td>Current event calendar, rewards, and whether content is permanent.</td></tr>
            </tbody></table></div>
          </section>

          <section id="progression">
            <SectionHeading>Staged Progression &amp; Rates</SectionHeading>
            <p>Kaldrox’s most distinctive progression signal is the staged experience curve. Early levels are designed to move quickly, but the rate falls over time so higher-level advancement remains a longer commitment than the opening hours suggest.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Setting</th><th>Publicly reported value</th><th>How to read it</th></tr></thead><tbody>{rateRows.map(([setting, value, impact]) => <tr key={setting}><th>{setting}</th><td><strong>{value}</strong></td><td>{impact}</td></tr>)}</tbody></table></div>
            <p>Because the experience rate changes by level, players should not compare Kaldrox to a single fixed-rate server using only its opening multiplier. Verify level brackets, vocation effects, task bonuses, VIP modifiers, and any current event boosts before planning a build.</p>
          </section>

          <section id="systems">
            <SectionHeading>Systems &amp; Community</SectionHeading>
            <p>The systems below are drawn from public server descriptions and are useful for understanding Kaldrox’s intended shape. They are not a substitute for the current official rules, especially where prices, bonuses, or event schedules are involved.</p>
            <div className="grid gap-4 md:grid-cols-2">{systems.map(([name, description]) => <div key={name} className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{name}</h3><p className="mt-2 text-sm leading-7 text-black">{description}</p></div>)}</div>
            <div className="cyntara-wiki__callout"><strong>Player fit</strong><p>Kaldrox is a stronger fit for players who want recognizable global-map routes with a deliberately slowing progression curve. It is less suitable for anyone seeking a guaranteed short seasonal experience or a fully documented custom ruleset before joining.</p></div>
          </section>

          <section id="client">
            <SectionHeading>Client Safety &amp; Getting Started</SectionHeading>
            <p>The official Kaldrox website was behind a Cloudflare verification screen when checked for this profile, so its current client, account, rules, and support pages could not be independently read in a text fetch. Use a normal browser and confirm that every download is served from the operator’s current domain.</p>
            <p>A community discussion has raised questions about custom-client GPU usage and false-positive detections. That discussion is a report to investigate, not proof that a client is malicious or safe.</p>
            <ol>
              <li>Open <code>kaldrox.com</code> directly and confirm the current account and client path.</li>
              <li>Check the file source, publisher details, hash or release notes, and any official support guidance before installing.</li>
              <li>Read the current rules for PvP, botting, VIP items, events, transfers, and account security.</li>
              <li>Compare the live status with the directory record and start with a low-risk test account if the official guidance permits it.</li>
            </ol>
            <div className="cyntara-wiki__callout"><strong>Security note</strong><p>Do not disable antivirus or operating-system protections to force a client launch. If a detection or unusual resource usage persists, pause and ask the operator for a signed release, hash, or documented explanation.</p></div>
          </section>

          <section id="sources">
            <SectionHeading>Sources &amp; Current Verification</SectionHeading>
            <p>This profile combines the OpenTibiaServers directory record with public server-list descriptions and a dated community client discussion. The official Kaldrox site remains the authority for live downloads, rules, account requirements, and support, but it was challenge-gated during research.</p>
            <div className="grid gap-3 md:grid-cols-2">
              <SourceLink href="https://www.kaldrox.com/" label="Kaldrox official website" />
              <SourceLink href="https://nostalgic.gg/en/tibia/kaldrox-server" label="Public Kaldrox profile and rates" />
              <SourceLink href="https://otland.net/threads/kaldrox-client-shady-behavior-high-gpu-ussage.298836/" label="Community client discussion" />
              <SourceLink href="https://otservlist.org/list-server_players_online-desc.html" label="Open Tibia player ranking" />
              <SourceLink href="/" label="OpenTibiaServers live directory" />
            </div>
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>
              <li><a href="https://www.kaldrox.com/" target="_blank" rel="nofollow noopener noreferrer">Official Kaldrox website</a></li>
              <li><a href="https://nostalgic.gg/en/tibia/kaldrox-server" target="_blank" rel="nofollow noopener noreferrer">Public Kaldrox profile</a></li>
              <li><a href="https://otland.net/threads/kaldrox-client-shady-behavior-high-gpu-ussage.298836/" target="_blank" rel="nofollow noopener noreferrer">Community client-safety discussion</a></li>
              <li><a href="/">OpenTibiaServers directory</a></li>
            </ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Kaldrox</div>
            <ServerLogo server={{ name: 'Kaldrox', slug: 'kaldrox', host: 'sv.kaldrox.com' }} size="profile" />
            <table><tbody>
              <tr><th>Website</th><td><a href="https://www.kaldrox.com/" target="_blank" rel="nofollow noopener noreferrer">kaldrox.com</a></td></tr>
              <tr><th>Host</th><td><code>sv.kaldrox.com:7171</code></td></tr>
              <tr><th>Location</th><td>Brazil signal</td></tr>
              <tr><th>Client</th><td>8.60</td></tr>
              <tr><th>PvP</th><td>PVP listing classification</td></tr>
              <tr><th>Rates</th><td>Staged EXP / 14x skill / 5x magic / 1x loot</td></tr>
              <tr><th>World</th><td>Global Map base with custom additions</td></tr>
              <tr><th>Peak snapshot</th><td>2,863 players</td></tr>
              <tr><th>Status</th><td>Listed active; verify live status</td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Confirm the current official client and rules. Community reports about GPU usage or detections should be investigated carefully, without disabling security controls.</p></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Kaldrox with other Open Tibia worlds by live status, protocol, location, rates, and player activity.</p><a className="cyntara-wiki__button" href="/?search=Kaldrox">Browse similar servers</a></div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}

function SourceLink({ href, label }) {
  const external = href.startsWith('http');
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined} className="rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</a>;
}
