import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & World Identity'],
  ['facts', 'At-a-Glance Facts'],
  ['worlds', 'Spectrum & Warfare'],
  ['progression', 'Progression & Rates'],
  ['systems', 'Custom Systems & Content'],
  ['sieges', 'Sieges, Tournaments & Wars'],
  ['pvp', 'Open PvP Rules'],
  ['community', 'Community & How to Start'],
  ['sources', 'Sources & Verification'],
  ['ecosystem', 'The Open Tibia Ecosystem'],
  ['external-links', 'External Links'],
];

const systems = [
  ['Staged experience', 'Realera is described as a medium-rate 8.0 project with staged experience. The exact level brackets should be confirmed in the current game-features documentation.'],
  ['4x spawns', 'A four-times spawn setting is part of the documented server profile, shaping hunt availability and the pace of creature respawns.'],
  ['Stamina', 'Stamina is listed as a core gameplay system and should be considered when comparing Realera with other old-school worlds.'],
  ['Daily sieges', 'Daily siege content provides level-gated locations and rewards, adding a recurring competitive loop beyond ordinary hunting.'],
  ['Custom content', 'Realera combines an 8.0 real-map foundation with custom content, regular updates, tournaments, wars, and additional PvP activities.'],
  ['Custom client', 'The launch record identifies a custom client and an advanced proxy system as part of the Realera experience.'],
  ['Built-in cam', 'A built-in cam system is named in the historical server configuration, allowing players to record or follow gameplay through the client.'],
  ['World updates', 'Public descriptions position Realera as an evolving old-school world rather than a frozen historical 8.0 snapshot.'],
];

const worldRows = [
  ['Spectrum', 'One of Realera’s named worlds.', 'Check the official site for current population, rules, launch state, and world-specific settings.'],
  ['Warfare', 'A named Realera world oriented toward the project’s competitive identity.', 'Confirm current PvP configuration, siege access, and any world-specific progression differences.'],
];

const rateRows = [
  ['Protocol', '8.0 / Custom', 'Realera uses an old-school 8.0 identity with custom content and client features.'],
  ['Experience', 'Medium-rate with staged experience', 'The directory snapshot does not provide a complete stage table.'],
  ['Spawn', '4x spawns', 'A documented profile value; verify whether it applies identically to every world and area.'],
  ['PvP', 'PVP-Enforced / Open PvP signals', 'Read the current rules for frags, skulls, banishment, wars, and protection zones.'],
  ['Host', 'realera.org:7290', 'Historical directory and launch records use this public address; confirm the current login path before connecting.'],
];

const progressionRows = [
  ['Early character building', 'Start with the classic 8.0 vocation and hunt loop, then use the staged experience curve to identify the next efficient hunting range.'],
  ['Stamina management', 'Stamina is a named part of the ruleset, so long sessions and experience efficiency should be planned around the current stamina rules.'],
  ['Daily objectives', 'Daily sieges and recurring competitive content give characters reasons to return after the first leveling milestones.'],
  ['Group play', 'Wars, tournaments, sieges, and Open PvP make guild membership and reliable group communication important parts of progression.'],
  ['Custom updates', 'Regular world updates can add or rebalance content, so old hunt lists and rate assumptions should be dated.'],
];

const siegeRows = [
  ['Daily sieges', 'The documented feature profile describes recurring sieges with level-gated locations and rewards.'],
  ['Competitive locations', 'Access is associated with character-level requirements; current location names and gates should be checked in the official guide.'],
  ['Rewards', 'Sieges provide rewards, but the public profile does not expose a complete item or currency table.'],
  ['Tournaments', 'Tournaments are part of Realera’s competitive identity and are listed alongside wars and custom PvP content.'],
  ['Wars', 'Guild wars provide a larger-scale conflict loop around Realera’s enforced-PvP identity.'],
  ['Schedules', 'Exact siege times, registration windows, team limits, and cooldowns are not available in the accessible source material.'],
];

const pvpRows = [
  ['Red Skull', 'The historical configuration lists 3 frags to Red Skull.'],
  ['Banishment', 'The historical configuration lists 6 frags to banishment.'],
  ['Frag reduction', 'The recorded configuration lists a 16-hour decrease for Golden Account and 24 hours without it.'],
  ['Unjustified-kill ban', 'The historical configuration lists a 3-day ban for unjustified player killing.'],
  ['Final ban', 'The historical configuration lists a 7-day final ban.'],
  ['Current rules', 'These values come from an older launch record and must be checked against the current Realera rules before being treated as active.'],
];

const timeline = [
  ['24 July 2020', 'Community launch record', 'The archived launch entry by ruth records Realera as a USA, 8.0/custom, medium-rate real-map server.'],
  ['Original configuration', 'Nexorium world profile', 'The historical record names PVP-Enforced, a custom client, advanced proxy, built-in cam, and a 10:00 AM server save.'],
  ['Later world history', 'Spectrum and Warfare', 'The current public profile identifies Spectrum and Warfare as Realera worlds with different progression histories.'],
  ['Current directory snapshot', 'Realera remains discoverable', 'The listing identifies realera.org on port 7290, with a 39-player snapshot and an unclaimed profile.'],
];

const externalLinks = [
  ['Realera official website', 'https://realera.org/'],
  ['Realera game features', 'https://realera.org/about/game-features'],
  ['Realera official wiki', 'https://wiki.realera.org/Main_Page'],
  ['Realera siege guide', 'https://wiki.realera.org/Sieges'],
];

export default function RealeraWikiPage() {
  return (
    <div className="cyntara-wiki">
      <header className="cyntara-wiki__header">
        <h1>Realera</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <main className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong>Realera</strong> is an 8.0 custom Open Tibia world built around old-school real-map progression, enforced PvP, tournaments, guild wars, custom content, staged experience, 4x spawns, stamina, and daily siege activity. Its current public world names are Spectrum and Warfare.</p>
              <p>The project is aimed at players who want a familiar 8.0 foundation with more competitive reasons to keep playing. This page gathers Realera’s server identity, historical PvP settings, named systems, world structure, and the official pages players should check before connecting.</p>
            </div>
            <div className="w-full shrink-0 md:w-64">
              <ServerLogo server={{ name: 'Realera', slug: 'realera', host: 'realera.org' }} size="profile" />
            </div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; World Identity</SectionHeading>
            <p>Realera’s identity is a blend of classic 8.0 real-map familiarity and an active competitive layer. Public descriptions emphasize PvP, tournaments, wars, custom content, regular updates, daily sieges, level-gated rewards, and an old-school medium-rate pace rather than a purely cosmetic custom server.</p>
            <p>The historical community record calls Realera an 8.0/custom real-map server with a USA datacenter, PVP-Enforced rules, a custom client, an advanced proxy system, and a built-in cam. The current profile identifies Realera through the realera.org domain and the Spectrum and Warfare worlds.</p>
            <div className="cyntara-wiki__callout"><strong>What makes Realera different?</strong><p>Realera keeps the geography and vocabulary of an 8.0 world, then adds competitive scheduling. Daily sieges, tournaments, wars, and custom updates are as important to its identity as the base protocol.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>At-a-Glance Facts</SectionHeading>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Field</th><th>Realera profile</th><th>Player context</th></tr></thead><tbody>
              <tr><th>Host</th><td><code>realera.org:7290</code></td><td>Public address in the archived listing; verify the current connection path officially.</td></tr>
              <tr><th>Protocol</th><td>8.0 / Custom</td><td>Old-school 8.0 foundation with custom systems and content.</td></tr>
              <tr><th>Server type</th><td>PVP-Enforced</td><td>Competitive rules are central; read the current PvP policy before playing.</td></tr>
              <tr><th>Region signal</th><td>USA</td><td>Recorded as a directory and launch-thread region hint.</td></tr>
              <tr><th>Players</th><td>39 online snapshot</td><td>Time-sensitive listing value, not a permanent population guarantee.</td></tr>
              <tr><th>Community record</th><td>276 replies / 100,000 views</td><td>Archived launch discussion by ruth; useful historical context.</td></tr>
              <tr><th>Claim status</th><td>Unclaimed</td><td>No current owner or manager verification is attached to the directory profile.</td></tr>
              <tr><th>Worlds</th><td>Spectrum and Warfare</td><td>Use the official site for each world’s current status and rules.</td></tr>
            </tbody></table></div>
          </section>

          <section id="worlds">
            <SectionHeading>Spectrum &amp; Warfare</SectionHeading>
            <p>Realera should be approached as a world family. Spectrum and Warfare are the named worlds in the current profile, but their population, launch cycle, PvP details, and progression state may not be identical.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>World</th><th>Public identity</th><th>Confirm before joining</th></tr></thead><tbody>{worldRows.map(([name, identity, note]) => <tr key={name}><th>{name}</th><td>{identity}</td><td>{note}</td></tr>)}</tbody></table></div>
            <p>Older archived material also refers to a world called Nexorium and later launch titles mention new worlds. Those names belong to the historical record and should not be silently treated as current Spectrum or Warfare settings.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">{timeline.map(([date, title, body]) => <div key={title} className="border-l-4 border-gray-300 bg-gray-50 p-4"><p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">{date}</p><h3 className="mb-1 text-base font-bold text-black">{title}</h3><p className="mb-0 text-sm leading-7 text-gray-700">{body}</p></div>)}</div>
          </section>

          <section id="progression">
            <SectionHeading>Progression &amp; Rates</SectionHeading>
            <p>Realera is described as a medium-rate 8.0 custom world with staged experience and 4x spawns. The available public record does not expose a complete current rate table, so historical listing signals and live rules should be kept separate.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Category</th><th>Known profile</th><th>How to read it</th></tr></thead><tbody>{rateRows.map(([category, profile, note]) => <tr key={category}><th>{category}</th><td>{profile}</td><td>{note}</td></tr>)}</tbody></table></div>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Progression loop</th><th>What it means for a new character</th></tr></thead><tbody>{progressionRows.map(([loop, description]) => <tr key={loop}><th>{loop}</th><td>{description}</td></tr>)}</tbody></table></div>
            <p>Exact skill, magic-level, loot, experience-stage, stamina, and world-specific rates should come from the current Realera site or wiki. Avoid using the archived 2020 configuration as a substitute for today’s settings.</p>
          </section>

          <section id="systems">
            <SectionHeading>Custom Systems &amp; Content</SectionHeading>
            <p>The public Realera profile documents a classic real-map base with systems designed to keep the world active and competitive. These features are the strongest search signals for players deciding whether Realera fits their preferred Open Tibia style.</p>
            <div className="grid gap-4 md:grid-cols-2">{systems.map(([name, description]) => <div key={name} className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{name}</h3><p className="mt-2 text-sm leading-7 text-black">{description}</p></div>)}</div>
          </section>

          <section id="sieges">
            <SectionHeading>Sieges, Tournaments &amp; Wars</SectionHeading>
            <p>Competitive content is the core of Realera’s public identity. Daily sieges add a repeatable objective, while tournaments and wars create larger guild and player conflicts around the Open-PvP ruleset.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Activity</th><th>Documented profile</th></tr></thead><tbody>{siegeRows.map(([name, description]) => <tr key={name}><th>{name}</th><td>{description}</td></tr>)}</tbody></table></div>
            <div className="cyntara-wiki__callout"><strong>Check the current siege schedule</strong><p>The accessible public record confirms daily sieges, level gates, and rewards but not the complete live schedule, maps, registration rules, or reward table. Use the official siege guide before organizing a guild.</p></div>
          </section>

          <section id="pvp">
            <SectionHeading>Open PvP Rules</SectionHeading>
            <p>Realera’s archived launch configuration provides unusually specific PvP values. They are valuable for understanding the project’s intended combat style, but they are historical and must be compared with the current official rules.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Rule</th><th>Historical value</th><th>Status</th></tr></thead><tbody>{pvpRows.map(([rule, value, status]) => <tr key={rule}><th>{rule}</th><td>{value}</td><td>{status}</td></tr>)}</tbody></table></div>
            <p>The archived configuration also records a 10:00 AM server save and a 24-hour character creation window before one historical world launch. These details are preserved as launch context, not presented as current universal rules.</p>
          </section>

          <section id="community">
            <SectionHeading>Community &amp; How to Start</SectionHeading>
            <p>The Realera community record is substantial: the archived launch thread is attributed to ruth and contains 276 replies and 100,000 views. That discussion preserves how the server was presented, but current players should pair it with the live website and wiki.</p>
            <ol>
              <li>Choose between Spectrum and Warfare after checking the official world status and current population.</li>
              <li>Read the current PvP, banishment, war, siege, account, and client rules.</li>
              <li>Confirm the current connection host and download path at <a href="https://realera.org/" target="_blank" rel="nofollow noopener noreferrer">realera.org</a>.</li>
              <li>Review the game-features and siege pages before choosing a vocation or guild role.</li>
              <li>Join the active community channels linked from the official website if you need launch, event, or maintenance information.</li>
              <li>Start with ordinary hunting and stamina management, then add daily sieges and tournaments once your character meets the relevant gates.</li>
            </ol>
            <div className="grid gap-4 md:grid-cols-2"><div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">Best fit for</h3><p className="mt-2 text-sm leading-7 text-black">Players who enjoy an old-school 8.0 real-map setting but want active PvP, guild conflict, scheduled sieges, tournaments, and regular custom updates.</p></div><div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">Read first</h3><p className="mt-2 text-sm leading-7 text-black">Check rates, world rules, siege requirements, client availability, and current population before treating archived launch details as present-day facts.</p></div></div>
          </section>

          <section id="sources">
            <SectionHeading>Sources &amp; Current Verification</SectionHeading>
            <p>Realera’s official website and wiki are the primary references for current rules, features, sieges, and client information. The directory and archived community record add population, launch, and historical context.</p>
            <div className="grid gap-3 md:grid-cols-2">
              <SourceLink href="https://realera.org/" label="Realera official website" />
              <SourceLink href="https://realera.org/about/game-features" label="Realera game features" />
              <SourceLink href="https://wiki.realera.org/Main_Page" label="Realera official wiki" />
              <SourceLink href="https://wiki.realera.org/Sieges" label="Realera siege guide" />
              <SourceLink href="https://opentibiaservers.com/" label="OpenTibiaServers directory" />
            </div>
            <div className="cyntara-wiki__callout"><strong>Historical data notice</strong><p>The archived launch record is useful for understanding Realera’s original configuration, but world names, rates, bans, schedules, and client requirements can change.</p></div>
          </section>

          <section id="ecosystem">
            <SectionHeading>The Open Tibia Ecosystem</SectionHeading>
            <p>Open Tibia includes classic replicas, real-map worlds, high-rate PvP servers, war servers, and deeply customized RPG projects. Realera is a competitive old-school option: its 8.0 foundation appeals to classic players, while sieges, tournaments, wars, and custom updates give guilds more to organize around.</p>
            <div className="cyntara-wiki__callout"><strong>Looking for Private Servers?</strong><p>Explore <a href="/">opentibiaservers.com</a>, the leading open tibia server listing directory for real-time status tracking, player counts, version filters, and community rankings across active OTServ projects.</p></div>
            <div className="cyntara-wiki__recommended"><h3>Recommended Open Tibia Server</h3><p>For players seeking a polished Open Tibia experience with custom bosses, active community events, and modern client features, <strong>Evomanias</strong> is highly recommended as a premier alternative.</p><a className="cyntara-wiki__button" href="https://evomanias.com/" target="_blank" rel="noopener noreferrer">Play Evomanias</a></div>
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>{externalLinks.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="nofollow noopener noreferrer">{label}</a></li>)}</ul>
            <ul>
              <li><a href="/">OpenTibiaServers directory</a></li>
              <li><a href="https://evomanias.com/" target="_blank" rel="noopener noreferrer">Play Evomanias</a></li>
            </ul>
          </section>
        </main>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Realera</div>
            <ServerLogo server={{ name: 'Realera', slug: 'realera', host: 'realera.org' }} size="profile" />
            <table><tbody>
              <tr><th>Host</th><td><code>realera.org:7290</code></td></tr>
              <tr><th>Region</th><td>USA signal</td></tr>
              <tr><th>Server type</th><td>8.0 / Custom</td></tr>
              <tr><th>Worlds</th><td>Spectrum, Warfare</td></tr>
              <tr><th>PvP</th><td>PVP-Enforced</td></tr>
              <tr><th>Experience</th><td>Medium-rate / staged</td></tr>
              <tr><th>Spawns</th><td>4x</td></tr>
              <tr><th>Features</th><td>Sieges, wars, tournaments</td></tr>
              <tr><th>Players</th><td>39 snapshot</td></tr>
              <tr><th>Claim status</th><td>Unclaimed</td></tr>
              <tr><th>Website</th><td><a href="https://realera.org/" target="_blank" rel="nofollow noopener noreferrer">realera.org</a></td></tr>
              <tr><th>Wiki</th><td><a href="https://wiki.realera.org/Main_Page" target="_blank" rel="nofollow noopener noreferrer">Realera Wiki</a></td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__callout"><strong>Before joining</strong><p>Confirm the current world, host, client, PvP rules, and siege schedule on Realera’s official pages.</p><a href="https://realera.org/" target="_blank" rel="nofollow noopener noreferrer">Open Realera website</a></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Realera with other Open Tibia worlds by protocol, PvP type, location, uptime, and community signals.</p><a className="cyntara-wiki__button" href="/">Browse server listings</a></div>
        </aside>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}

function SourceLink({ href, label }) {
  return <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</a>;
}
