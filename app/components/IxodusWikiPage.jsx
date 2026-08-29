import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & identity'],
  ['facts', 'Reference facts & record differences'],
  ['world', 'Real-map content & progression'],
  ['pvp', 'PvP, wars & competitive play'],
  ['systems', 'Systems, quests & events'],
  ['client', 'Client & connection safety'],
  ['start', 'How to start & who it suits'],
  ['sources', 'Sources & current verification'],
  ['external-links', 'External links'],
];

const factRows = [
  ['Server name', 'Ixodus', 'The official domain metadata and preserved community launch record identify the project as Ixodus.'],
  ['Official website', 'ixodus.net', 'Operator-controlled domain; it returned a Cloudflare verification screen during current research.'],
  ['Directory login record', 'login.ixodus.net:7171', 'The local directory inventory records this endpoint. Confirm it on the official account or download page before connecting.'],
  ['Directory snapshot', 'Poland · 15.0 · PVP', 'A later directory inventory signal, captured separately from the historical launch announcement.'],
  ['Recorded activity peak', '1,421 players', 'Snapshot field in the local directory inventory; it is not a current online-player count or capacity guarantee.'],
  ['Historical launch identity', 'South America · 10 / 12.20+', 'A September 2019 owner launch post described a real-map South America edition. It should not be conflated with the later directory snapshot.'],
  ['Official feature summary', 'Custom items, active PvP, castle & guild wars', 'Wording from the archived official-site metadata description.'],
];

const systemRows = [
  ['Character systems', 'Addon bonuses, static trainers, Cast, Honor, Prey, and imbuements are named in public Ixodus materials. Exact effects, costs, and availability require an active official guide.'],
  ['World content', 'Public descriptions name a real-map base, unique quests, Warzones 7–9, Gaz’haragoth, Oramond, Roshamuul, Otherworld, Krailos, and later-content quest lines.'],
  ['Progression aids', 'Daily rewards, early-level loss protection, and accelerated early skill or magic progression appear in third-party listing material; current values are unverified.'],
  ['Competitive activities', 'Castle wars, guild wars, Last Man Standing, Zombie, Rush, Pandora Box, and DeathMatch are among the publicly described activities. Schedules and rules can change.'],
  ['Seasonal and world events', 'Public listings reference Devovorga, Feroxa, Lightbearer, Orcsoberfest, Winterlight Solstice, rapid respawn, and weekend bonus experience. Treat these as historical feature signals, not a live calendar.'],
];

export default function IxodusWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="ixodus">
      <header className="cyntara-wiki__header">
        <h1>Ixodus</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong>Ixodus</strong> is an <strong>Open Tibia server</strong> associated with <code>ixodus.net</code>. Its published identity centers on a <em>real-map</em> experience, custom items, active PvP, and guild- and castle-war competition. Historical material connects Ixodus with South America and 10/12.20+ clients, while a later directory snapshot records a Poland-based 15.0 PVP endpoint; this Wiki preserves both records instead of presenting either as a timeless fact.</p>
              <p>Players researching an <strong>Ixodus server</strong>, its client, rates, events, or war scene should use this page as an evidence-led starting point. <u>Current rules, status, downloads, and account paths must be verified directly with the operator</u>, because the official website was protected by a Cloudflare verification screen when this profile was reviewed.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Ixodus', slug: 'ixodus', host: 'ixodus.net' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview"><SectionHeading>Overview &amp; identity</SectionHeading><p>Ixodus is best described as a <strong>PvP-focused Open Tibia project</strong> with a real-map foundation and a competitive community angle. Archived official metadata advertises custom items, active PvP, castle wars, and guild wars. A preserved owner launch post from September 2019 additionally described real-map content, quests, a task system, bosses, events and raids, and daily rewards.</p><p>The name should not be merged with <a href="/servers/ezodus">Ezodus</a>, despite the similar network-style naming. They are separate directory identities with distinct domains and records. Comparing the two can be useful, but it is important to verify the exact account and game endpoint before installing a client or creating a character.</p><div className="cyntara-wiki__callout"><strong>Evidence scope</strong><p>This article distinguishes source-backed identity and historical feature claims from current service facts. It does not treat an archived launch post, a third-party listing, or a directory snapshot as a substitute for an operator-maintained rules or download page.</p></div></section>

          <section id="facts"><SectionHeading>Reference facts &amp; record differences</SectionHeading><p>Ixodus has records from different periods and contexts. The table makes those differences visible so that a 2019 launch description is not accidentally read as a current 15.0 ruleset, and a directory endpoint is not mistaken for a permanent public promise.</p><div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Field</th><th>Recorded value</th><th>Evidence &amp; context</th></tr></thead><tbody>{factRows.map(([field, value, context]) => <tr key={field}><th>{field}</th><td><strong>{value}</strong></td><td>{context}</td></tr>)}</tbody></table></div><div className="cyntara-wiki__callout"><strong>Rate discrepancy</strong><p>Public third-party material has described Ixodus with a 2× experience profile and separately with references to 30× experience bonuses, while the local research profile describes a 60× experience listing. These incompatible, undated signals are not presented as a current rate table. Confirm experience stages, skills, magic, loot, spawn, and death-loss settings on an active official page.</p></div></section>

          <section id="world"><SectionHeading>Real-map content &amp; progression</SectionHeading><p>Available public material positions Ixodus around a <strong>real-map Open Tibia</strong> experience rather than a purely custom world. Named content includes Warzones 7–9, Gaz’haragoth, Oramond, Roshamuul, Otherworld, Krailos, and quest lines associated with Kilmaresh/Issavi, Grave Danger, Feaster of Souls, Heart of Destruction, Secret Library, Soul War, and Rotten Blood.</p><p>These names are useful search and onboarding signals for returning Tibia players, but they do not establish whether every area, boss, access condition, reward, or mechanic is currently enabled. A quest can be implemented differently from its retail counterpart, adjusted for a server’s balance, or changed between seasons. Consult the current operator documentation before planning a route, build, or item purchase.</p><p>For broader context on how private-server progression and mechanics differ from official Tibia, browse the <a href="/knowledge">OpenTibiaServers knowledge base</a> before choosing a long-term world.</p></section>

          <section id="pvp"><SectionHeading>PvP, wars &amp; competitive play</SectionHeading><p><strong>Ixodus PvP</strong> is a central part of the project’s public identity. The official summary specifically names active PvP alongside castle and guild wars, while public listings describe organized team activities. This makes Ixodus most relevant to players looking for social competition, guild objectives, and event-driven conflict rather than only solo leveling.</p><p>“PVP” is a broad classification, not a complete ruleset. The reviewed sources do not verify the current frag thresholds, skull system, red- or black-skull penalties, level protection, multi-client rules, bot policy, war declarations, death loss, or siege rewards. <u>Read the current rules before committing time, characters, or purchases to a war-oriented server.</u></p><div className="grid gap-4 md:grid-cols-2"><FactCard label="Potential fit" text="Players seeking a real-map server where PvP, guild coordination, castle objectives, and scheduled activities may shape the day-to-day experience." /><FactCard label="Confirm first" text="Current PvP penalties, war procedures, team limits, anti-cheat policy, transfer rules, and the activity schedule for the world you intend to join." /></div></section>

          <section id="systems"><SectionHeading>Systems, quests &amp; events</SectionHeading><p>Ixodus is publicly associated with a wide systems layer beyond core leveling. The following entries retain those published feature signals while directing players to operator sources for the exact rules behind them.</p><div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Area</th><th>Published signal</th></tr></thead><tbody>{systemRows.map(([area, detail]) => <tr key={area}><th>{area}</th><td>{detail}</td></tr>)}</tbody></table></div><p>Feature labels such as <strong>Prey</strong>, <strong>Honor</strong>, <strong>Cast</strong>, and <strong>imbuements</strong> indicate familiar modern-OT progression ideas, but their rules can differ substantially between servers. Players should not assume retail values, availability, or balance from a feature name alone.</p></section>

          <section id="client"><SectionHeading>Client &amp; connection safety</SectionHeading><p>The local directory inventory records <code>login.ixodus.net:7171</code> with a 15.0 label. Historical launch material instead references 10 / 12.20+ client support. This likely reflects different periods or editions, but the relationship cannot be established from the reviewed sources alone.</p><ol><li>Start at <a href="https://www.ixodus.net/" target="_blank" rel="nofollow noopener noreferrer">the official Ixodus website</a> and complete its normal browser verification only if you intended to visit it.</li><li>Confirm the current account page, login host, port, client version, launcher, release notes, and checksums on an operator-controlled source.</li><li>Download only from a currently linked official page; avoid third-party mirrors, reposted launchers, and instructions to weaken operating-system or antivirus protections.</li><li>Read current rules for automation, multi-clienting, account security, donations, trade, PvP, and recovery before creating or funding an account.</li><li>Compare live status close to play time, since directory counts, routes, and availability are inherently time-sensitive.</li></ol><div className="cyntara-wiki__callout"><strong>Connection note</strong><p><code>login.ixodus.net:7171</code> is a directory-recorded endpoint, not an independently verified current download or login instruction. The official site must be the final authority.</p></div></section>

          <section id="start"><SectionHeading>How to start &amp; who it suits</SectionHeading><p>Ixodus may suit players looking for a <strong>real-map PvP server</strong> with advertised guild and castle warfare, custom progression systems, and modern quest content. The best first session is a short verification pass: establish the active version and endpoint, compare current rules with your preferred PvP risk level, and then review event and guild information from official channels.</p><p>Use the <a href="/">OpenTibiaServers directory</a> to compare server identity, protocol, region, and activity signals with other projects. For a similar-name project, see the separate <a href="/servers/ezodus">Ezodus Wiki profile</a>; it is not an alternate Ixodus address or account path.</p></section>

          <section id="sources"><SectionHeading>Sources &amp; current verification</SectionHeading><p>The official Ixodus domain supplies the strongest identity evidence, including the project name and its public description. A preserved owner launch record supplies dated historical context, and the local directory inventory preserves a later endpoint, region, protocol label, and peak field. The official page is currently access-challenged in automated research, so live gameplay details remain unconfirmed.</p><div className="grid gap-3 md:grid-cols-2"><SourceLink href="https://www.ixodus.net/" label="Ixodus official website" /><SourceLink href="https://tibiaotlist.com/servers/login-ixodus-net" label="TibiaOTList: Ixodus record" /><SourceLink href="/" label="OpenTibiaServers live directory" /><SourceLink href="/knowledge" label="OpenTibiaServers knowledge base" /></div><div className="cyntara-wiki__callout"><strong>Verification standard</strong><p>Current claims should link to an operator-controlled page, dated announcement, or verified live status. Third-party directories and historical posts remain useful discovery sources, but their figures and features should not be silently upgraded to permanent facts.</p></div></section>

          <section id="external-links"><SectionHeading>External links</SectionHeading><ul><li><ExternalLink href="https://www.ixodus.net/">Official Ixodus website</ExternalLink></li><li><ExternalLink href="https://tibiaotlist.com/servers/login-ixodus-net">TibiaOTList Ixodus listing</ExternalLink></li><li><a href="/">OpenTibiaServers directory</a></li><li><a href="/knowledge">OpenTibiaServers knowledge base</a></li></ul></section>
        </article>

        <aside className="cyntara-wiki__sidebar"><div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">Ixodus</div><ServerLogo server={{ name: 'Ixodus', slug: 'ixodus', host: 'ixodus.net' }} size="profile" /><table><tbody><tr><th>Website</th><td><a href="https://www.ixodus.net/" target="_blank" rel="nofollow noopener noreferrer">ixodus.net</a></td></tr><tr><th>Recorded host</th><td><code>login.ixodus.net:7171</code></td></tr><tr><th>Snapshot profile</th><td>Poland · 15.0 · PVP</td></tr><tr><th>Historical profile</th><td>South America · 10 / 12.20+</td></tr><tr><th>Identity</th><td>Real map · custom items</td></tr><tr><th>Competition</th><td>PvP · guild wars · castle wars</td></tr><tr><th>Peak field</th><td>1,421 (directory snapshot)</td></tr><tr><th>Current status</th><td>Verify at official site</td></tr></tbody></table></div><div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Verify the active client, account path, login details, rules, and community links on an operator-controlled page before installing or logging in.</p></div><div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Ixodus with other Open Tibia worlds by protocol, PvP type, location, uptime, and player activity.</p><a className="cyntara-wiki__button" href="/?search=Ixodus">Browse similar servers</a></div></aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) { return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>; }

function FactCard({ label, text }) { return <div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{label}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p></div>; }

function ExternalLink({ href, children }) { return <a href={href} target="_blank" rel="nofollow noopener noreferrer">{children}</a>; }

function SourceLink({ href, label }) { const external = href.startsWith('http'); return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined} className="rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</a>; }
