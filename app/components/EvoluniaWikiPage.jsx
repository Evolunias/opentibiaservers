import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & identity'],
  ['facts', 'Reference facts'],
  ['progression', 'Rates & progression'],
  ['systems', 'Custom systems & combat'],
  ['content', 'Quests, zones & bosses'],
  ['rules', 'Rules & client safety'],
  ['activity', 'Activity & launch history'],
  ['sources', 'Sources & verification'],
  ['external-links', 'External links'],
];

const facts = [
  ['Server name', 'Evolunia', 'The name used by the official site and the archived launch record.'],
  ['Connection', 'evolunia.net:7171', 'The archived and directory address; verify the active endpoint before connecting.'],
  ['Client / version', 'Tibia 10.98', 'The launch record and custom-client references identify the 10.98 client family.'],
  ['Location', 'Germany', 'Region signal in the archived listing and public directory records.'],
  ['Server style', 'Mid-rate staged teleport server', 'A research profile summary, distinct from a flat high-rate or strict real-map label.'],
  ['Launch record', 'November 7, 2017', 'Archive thread titled “[Germany] [10.98] - Evolunia”.'],
  ['Community snapshot', '258 replies · 71,000 views', 'Historical discussion metrics preserved by the launch archive.'],
];

const rates = [
  ['Experience', 'Staged / medium', 'The public research profile describes staged progression; consult the live Server Info page for exact stages.'],
  ['Skills', '18×', 'Research profile value.'],
  ['Magic level', '10×', 'Research profile value.'],
  ['Loot', '2×', 'Public listing and research profile signal.'],
  ['Spawn', '1×', 'Research profile value; current configuration may change.'],
];

const systems = [
  ['Dynamic monsters', 'Skull colors communicate different monster behavior and strength. Research describes red-skull creatures as stronger and white-skull creatures as splitting on death.'],
  ['Orb system', 'Creatures may drop temporary or special boosts such as double experience, extra damage, speed, or rare rewards.'],
  ['Equipment attributes', 'Crystals and item attributes are associated with critical damage, healing increase, damage increase, chain, leech, and similar build modifiers.'],
  ['Bestiary points', 'Bestiary progress can feed permanent buffs and gives exploration a longer-term purpose.'],
  ['Charms and bonuses', 'Charms, attributes, and permanent bonuses extend character customization beyond the base 10.98 ruleset.'],
  ['Competitive events', 'Capture the Flag and other organized activities complement open-world PvP and guild conflict.'],
];

const ruleRows = [
  ['Trading', 'Do not exchange characters or in-game items for real money, Tibia Coins, or cross-server trades.'],
  ['Spam', 'Spamming across channels is prohibited under the published rule summary.'],
  ['PvP multiclienting', 'Using multiple clients to kill players is forbidden.'],
  ['Client limit', 'The researched rules permit up to four clients per person; verify the current policy before using multiple accounts.'],
  ['Staff authority', 'The rules reserve broad enforcement authority for staff, so read the complete current policy before playing.'],
];

const externalLinks = [
  ['Evolunia official website', 'https://evolunia.net/'],
  ['Evolunia official rules', 'https://evolunia.net/?subtopic=rules'],
  ['Evolunia official Server Info', 'https://evolunia.net/?subtopic=serverinfo'],
  ['OTLand launch thread: Germany 10.98 Evolunia', 'https://otland.net/threads/germany-10-98-evolunia.255188/'],
  ['Evolunia reference wiki', 'https://evolunia.fandom.com/wiki/Evolunia_Wiki%3AEvolunia_Wiki'],
  ['TibiaOTList public record', 'https://tibiaotlist.com/servers/status-evolunia-net'],
  ['OT Archive equipment reference', 'https://otarchive.com/server/62cde2f41770eac22ec6ad5b'],
  ['OpenTibiaServers directory', '/'],
];

export default function EvoluniaWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="evolunia">
      <header className="cyntara-wiki__header"><h1>Evolunia</h1><small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small></header>
      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start"><div className="min-w-0 flex-1"><p><strong><em><u>Evolunia</u></em></strong> is a Germany-associated <strong>Tibia 10.98 Open Tibia server</strong> with staged mid-rate progression, teleport-oriented access, custom quests, dynamic monsters, orb drops, equipment attributes, bestiary progression, and PvP activities.</p><p>This wiki profile combines official-site claims, a public research trail, and the archived <a href="https://otland.net/threads/germany-10-98-evolunia.255188/" target="_blank" rel="nofollow noopener noreferrer">Evolunia launch discussion</a>. Current rates, client downloads, rules, and availability should always be checked on the operator-controlled website.</p></div><div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Evolunia', slug: 'evolunia', host: 'evolunia.net' }} size="profile" /></div></div>
          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview"><SectionHeading>Overview &amp; identity</SectionHeading><p>Evolunia’s profile is broader than a directory row. Its 10.98 foundation is presented alongside custom systems that change how players hunt, improve equipment, discover zones, and compete. The server is best understood as a <strong><em>Evolunia OT</em></strong> experience for players who want recognizable Tibia progression with more active systems layered into the world.</p><p>The “mid-rate” description should not be confused with a single flat experience multiplier. Research describes staged experience, 18× skills, 10× magic, 2× loot, and 1× spawn. That combination can produce a faster opening while leaving hunting routes, upgrades, and custom objectives relevant later.</p><div className="cyntara-wiki__callout"><strong>Evidence scope</strong><p>Official and archival sources support the identity and named systems below. Exact stages, vocation balance, quest rewards, boss schedules, and live population remain time-sensitive and require current operator confirmation.</p></div></section>

          <section id="facts"><SectionHeading>Reference facts</SectionHeading><Table headers={['Field', 'Recorded value', 'Context']} rows={facts} /></section>

          <section id="progression"><SectionHeading>Rates &amp; progression</SectionHeading><p>Public research describes <strong><em><u>Evolunia rates</u></em></strong> as staged and medium-paced, with separate skill, magic, loot, and spawn settings. Players should use the exact live stage table rather than treating the server name or a directory label as a complete progression guide.</p><Table headers={['Category', 'Published signal', 'How to read it']} rows={rates} /><p>An 18× skill rate and 10× magic rate emphasize character development and spell access, while 2× loot and 1× spawn preserve the value of hunting decisions. Custom orbs, bestiary points, crystals, and permanent buffs can further alter the practical route from a new character to an established one.</p></section>

          <section id="systems"><SectionHeading>Custom systems &amp; combat</SectionHeading><p>Evolunia’s custom layer gives players more to interpret than standard 10.98 combat. The system descriptions below are attributed to the official or public research sources; exact formulas and reward tables should be confirmed in current documentation.</p><div className="grid gap-4 md:grid-cols-2">{systems.map(([title, text]) => <FactCard key={title} label={title} text={text} />)}</div><p>The combination of dynamic monsters and equipment modifiers makes combat information especially important. A creature’s appearance can communicate risk, while crystals and attributes can change how players evaluate drops, upgrades, and team roles.</p></section>

          <section id="content"><SectionHeading>Quests, zones &amp; bosses</SectionHeading><p>Archived and research material identifies custom quests, spawns, hidden rewards, bestiary objectives, and boss-oriented content as part of Evolunia’s expanded world. A teleport-oriented layout can reduce travel friction, but it does not remove the need to learn access requirements, creature behavior, and reward progression.</p><div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Player intent</th><th>What to verify</th></tr></thead><tbody><tr><th>Find a hunting zone</th><td>Island or spawn access, recommended level, dynamic-monster behavior, and current loot tables.</td></tr><tr><th>Plan a quest</th><td>NPC location, prerequisites, party size, reset rules, and reward details from the current wiki or official guide.</td></tr><tr><th>Prepare for a boss</th><td>Schedule, entry rules, damage mechanics, death penalties, and whether rewards are shared or personal.</td></tr><tr><th>Build equipment</th><td>Crystal sources, attribute ranges, upgrade costs, and the current market value of magical items.</td></tr></tbody></table></div></section>

          <section id="rules"><SectionHeading>Rules &amp; client safety</SectionHeading><p>The published rule summaries are unusually important for a competitive <strong>10.98 PvP server</strong>. They address outside trading, channel spam, PvP multiclient abuse, client limits, and staff enforcement.</p><Table headers={['Rule area', 'Published guidance']} rows={ruleRows} /><ol><li>Use the official Evolunia website for account creation and the active client download.</li><li>Check current rules before running multiple clients or participating in PvP events.</li><li>Do not use third-party download mirrors or trade accounts and items outside the authorized economy.</li><li>Keep the official support or rules page available if a client, market, or event policy changes.</li></ol></section>

          <section id="activity"><SectionHeading>Activity &amp; launch history</SectionHeading><p>Evolunia’s archived launch record is dated <strong>November 7, 2017</strong> and titled <strong>“[Germany] [10.98] - Evolunia”</strong>. It preserves 258 replies and approximately 71,000 views, providing meaningful historical context for a server that has existed in the public Open Tibia conversation for years.</p><p>Archive engagement is not a live population metric. Players should compare the current official news or server status with public directory observations immediately before playing. The same distinction applies to old screenshots, historical rates, and community claims that may predate later resets or balance changes.</p><div className="grid gap-4 md:grid-cols-3"><FactCard label="2017 launch record" text="Archived on November 7, 2017 under the Germany 10.98 Evolunia title." /><FactCard label="Community reach" text="258 replies and 71,000 views in the preserved discussion snapshot." /><FactCard label="Current check" text="Use the official site and current public listings for live status and client details." /></div></section>

          <section id="sources"><SectionHeading>Sources &amp; verification</SectionHeading><p>The official Evolunia domain is the primary destination for current rules, Server Info, downloads, and announcements. The OTLand launch thread preserves historical positioning and community context, while the reference wiki, TibiaOTList, and OT Archive provide additional leads for systems and configuration. Claims are kept attributable so <em>Evolunia server status</em> is not confused with an old archive snapshot.</p><div className="grid gap-3 md:grid-cols-2"><SourceLink href="https://evolunia.net/" label="Evolunia official website" /><SourceLink href="https://evolunia.net/?subtopic=rules" label="Official rules" /><SourceLink href="https://evolunia.net/?subtopic=serverinfo" label="Official Server Info" /><SourceLink href="https://otland.net/threads/germany-10-98-evolunia.255188/" label="OTLand launch archive" /></div><div className="cyntara-wiki__callout"><strong>Verification standard</strong><p>Use operator-controlled pages for current client, rules, rates, and status. Use archives and third-party references to understand history or discover leads, not to silently assert present-day guarantees.</p></div></section>

          <section className="cyntara-wiki__recommended" aria-label="Related server guides"><h3>Compare Open Tibia server styles</h3><p>Explore other documented worlds and compare version, rates, PvP, client, and custom-system depth.</p><div className="flex flex-wrap gap-3"><a className="cyntara-wiki__button" href="/servers/noxiousot">NoxiousOT guide</a><a className="cyntara-wiki__button" href="/servers/miracle74">Miracle74 guide</a><a className="cyntara-wiki__button" href="/servers/cyntara">Cyntara guide</a><a className="cyntara-wiki__button" href="/?search=10.98">Browse 10.98 servers</a></div></section>
          <section id="external-links"><SectionHeading>External links</SectionHeading><ul>{externalLinks.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>
        </article>
        <aside className="cyntara-wiki__sidebar"><div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">Evolunia</div><ServerLogo server={{ name: 'Evolunia', slug: 'evolunia', host: 'evolunia.net' }} size="profile" /><table><tbody><tr><th>Category</th><td>10.98 mid-rate PvP</td></tr><tr><th>Host</th><td><code>evolunia.net:7171</code></td></tr><tr><th>Region</th><td>Germany</td></tr><tr><th>Skills / magic</th><td>18× / 10×</td></tr><tr><th>Loot / spawn</th><td>2× / 1×</td></tr><tr><th>Custom layer</th><td>Orbs, crystals, bestiary &amp; buffs</td></tr><tr><th>Launch archive</th><td>November 7, 2017</td></tr><tr><th>Website</th><td><a href="https://evolunia.net/" target="_blank" rel="nofollow noopener noreferrer">evolunia.net</a></td></tr></tbody></table></div><div className="cyntara-wiki__callout"><strong>Before connecting</strong><p>Verify the active client, endpoint, rules, and current status through the official website.</p><a href="https://evolunia.net/" target="_blank" rel="nofollow noopener noreferrer">Open official website</a></div><div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Evolunia with other 10.98 and custom-content servers.</p><a className="cyntara-wiki__button" href="/?search=Evolunia">Browse similar servers</a></div></aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) { return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>; }
function FactCard({ label, text }) { return <div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{label}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p></div>; }
function Table({ headers, rows }) { return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td key={value}>{index === 1 ? <strong>{value}</strong> : value}</td>)}</tr>)}</tbody></table></div>; }
function ExternalLink({ href, children }) { const external = href.startsWith('http'); return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>; }
function SourceLink({ href, label }) { return <ExternalLink href={href}><span className="block rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</span></ExternalLink>; }
