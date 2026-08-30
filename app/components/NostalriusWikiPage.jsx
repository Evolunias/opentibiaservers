import ServerLogo from '@/app/components/ServerLogo';
import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';

const contents = [
  ['overview', 'Overview & server identity'],
  ['facts', 'Reference facts'],
  ['rates', 'Rates & progression'],
  ['systems', 'Custom systems & content'],
  ['pvp', 'PvP, frag & protection rules'],
  ['community', 'Community & how to start'],
  ['sources', 'Sources & verification'],
  ['external-links', 'External links'],
];

const facts = [
  ['Server', 'Nostalrius 7.4 Fast Pace', 'The official wiki identifies the 7.4 Fast Pace profile.'],
  ['Connection', 'on.nostalrius.com.br:7171', 'Directory snapshot; verify the current host on the official service.'],
  ['Client', 'Tibia 7.4', 'Official Server Info identifies the client version as 7.4.'],
  ['World type', 'Retro Open PvP', 'Official Server Info classification.'],
  ['Location', 'Miami — Multiworld Proxy', 'Official Server Info location signal.'],
  ['Experience', '15× to 1.3× staged', 'The official table changes by character level.'],
  ['Directory snapshot', '715 / 2,000 players', 'OpenTibiaServers snapshot, time-sensitive.'],
  ['Uptime snapshot', '98.87%', 'Public directory signal, not an availability guarantee.'],
];

const experience = [
  ['1–8', '15×'], ['9–20', '10×'], ['21–40', '8×'], ['41–50', '6×'], ['51–60', '4×'], ['61–70', '3×'], ['71–80', '2×'], ['81–90', '1.8×'], ['91–100', '1.7×'], ['101–110', '1.6×'], ['111–120', '1.5×'], ['121–149', '1.4×'], ['150+', '1.3×'],
];

const specialSystems = [
  ['Balance Experience Boost', 'After the launch grace period, players below 50% of the current server top level receive +100% XP; players between 51% and 70% receive +50%. Eligibility is recalculated at server save.'],
  ['Online Experience Boost', 'After 24 cumulative hours online, a character receives +25% experience for one hour. The reward is not stackable and progress pauses while it is active.'],
  ['Party experience', 'Shared experience bonuses are listed as +10% for one vocation, +15% for two, +30% for three, and +40% for four different vocations.'],
  ['Party task count', 'Three different vocations provide a 50% task-kill bonus; four provide 100%, subject to the official shared-experience rules.'],
  ['Forge and Tier', 'The official wiki exposes Forge, Tier System, Arcane Infusion, upgrade chances, rerolls, and materials as custom progression topics. Exact costs and chances belong to the live articles.'],
  ['Content library', 'The wiki catalogs 1,143 items, 436 monsters, 453 NPCs, and 169 tasks, plus bosses, warzones, quests, and hunting guides.'],
  ['Events', 'Capture The Flag, Safe Zone, Battlefield, SnowBall War, and Bomberman are listed as official events or minigames.'],
];

const pvpRules = [
  ['PZ lock', '15 minutes'], ['White skull', '15 minutes'], ['Red skull', '5 days'], ['Red skull threshold', '5 kills/day, 25/week, or 50/month'], ['Banishment threshold', '8 kills/day, 40/week, or 75/month'], ['Account ban time', '2 days'], ['Protection level', 'Rookgaard; boats and carpets are no-protection zones'], ['Death loss', '10% normal, 7% promoted, reduced by one point per blessing; all blessings are lost on death'],
];

const links = [
  ['Nostalrius official Server Info', 'https://home.nostalrius.com.br/serverinfo'],
  ['Nostalrius official Wiki', 'https://wiki.nostalrius.com.br'],
  ['How to play / downloads', 'https://wiki.nostalrius.com.br/#/a/como-jogar'],
  ['Official rules', 'https://wiki.nostalrius.com.br/#/a/regras'],
  ['Official server information wiki article', 'https://wiki.nostalrius.com.br/#/a/server-info'],
  ['Nostalrius Discord', 'https://discord.gg/FnqCcbYYs'],
  ['OpenTibiaServers directory', '/'],
];

export default function NostalriusWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="nostalrius">
      <header className="cyntara-wiki__header"><h1>Nostalrius</h1><small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small></header>
      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start"><div className="min-w-0 flex-1"><p><strong><em><u>Nostalrius</u></em></strong> is a Brazil-associated <strong>7.4 Retro Open PvP server</strong> presented by its official wiki as a Fast Pace profile. Its documented identity combines classic Tibia combat and world rules with staged progression, stamina, party bonuses, custom Forge and Tier systems, bosses, warzones, tasks, and recurring events.</p><p>This <em>Nostalrius server guide</em> separates official mechanics from dated directory activity. Use the official Server Info and <a href="https://wiki.nostalrius.com.br" target="_blank" rel="nofollow noopener noreferrer">Nostalrius 7.4 Wiki</a> for current rules, downloads, balance changes, and article details.</p></div><div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Nostalrius', slug: 'nostalrius', host: 'nostalrius.com.br' }} size="profile" /></div></div>
          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>
          <section id="overview"><SectionHeading>Overview &amp; server identity</SectionHeading><p>The official Nostalrius materials describe a classic 7.4 environment with a faster early progression curve and a broad supporting knowledge base. The current wiki separates the Nostalrius 7.4 Fast Pace profile from other planned or alternate server profiles, including Olders 8.0 Fast Pace and future worlds.</p><p>Players searching for <strong>Nostalrius 7.4</strong>, a <strong>Retro Open PvP server</strong>, or an old-school Tibia client should treat the server-information page as the authority for current connection details. The directory record is useful for comparing activity and uptime, but it cannot establish current launch status or availability.</p><div className="cyntara-wiki__callout"><strong>Verification note</strong><p>The official service reports dynamic status and recalculates some progression values at each server save. Historical announcements and community archive excerpts should be read with their dates intact.</p></div></section>
          <section id="facts"><SectionHeading>Reference facts</SectionHeading><Table headers={['Field','Recorded value','Evidence and context']} rows={facts} /></section>
          <section id="rates"><SectionHeading>Rates &amp; progression</SectionHeading><p>Nostalrius does not use a flat x15 experience promise across every level. The official table starts at <strong>15×</strong> for levels 1–8 and tapers to <strong>1.3×</strong> from level 150 onward. Skills are staged at 5×, 4×, 3×, and 2× by skill range; magic level is 2×; loot is described as custom.</p><Table headers={['Level range','Experience']} rows={experience} /><p>The official configuration also documents a 32-hour stamina pool, no experience below 12 hours of stamina, no loot below 6 hours, and account-specific regeneration speeds. These mechanics make stamina management part of the <em>Nostalrius progression</em> decision rather than a cosmetic setting.</p></section>
          <section id="systems"><SectionHeading>Custom systems &amp; content</SectionHeading><p>Alongside the classic 7.4 foundation, the official Nostalrius Wiki exposes a substantial custom content taxonomy. The existence of an article or collection does not by itself verify its current balance, access requirements, or reward values.</p><Table headers={['System or library','Documented scope']} rows={specialSystems} /><p>Named progression areas include <strong>Forge</strong>, <strong>Tier System</strong>, <strong>Arcane Infusion</strong>, Explorer Bags, Diamond Account, boss tokens, Warzone access, daily missions, and custom equipment. The official library also lists classic and custom bosses such as Julunggul, Versnoth, Frozemoth King, Graff Alucard, Arakho, Tiranus, and Osyluth.</p></section>
          <section id="pvp"><SectionHeading>PvP, frag &amp; protection rules</SectionHeading><p>Nostalrius is explicitly classified as <strong><em><u>Retro Open PvP</u></em></strong>. Its official rules include a frag system, guild protection against makers, anti-skull-bashing behavior, Warmode AOL compensation, and distinct penalties for red skulls and banishment.</p><Table headers={['Rule','Official value']} rows={pvpRules} /><p>Guild protection can prevent experience and level loss for a qualifying weaker player when the aggressor has guild support on screen, while abuse can trigger a ban after staff review. Warmode amulet protection applies only under the official PvP, Warmode, amulet, and skull conditions; it does not cover monster deaths, events, PvP zones, or unrelated Warmodes.</p><div className="cyntara-wiki__callout"><strong>Read the active rules</strong><p>Do not infer safe behavior from the PVP label alone. Review the official rules for skulls, makers, guild conduct, multi-clienting, events, and account penalties before joining a war.</p></div></section>
          <section id="community"><SectionHeading>Community &amp; how to start</SectionHeading><p>The official Wiki provides English, Portuguese, and Polish navigation, an online map, social links, commands, spells, item/monster/NPC/task collections, hunting guides, quests, bosses, and events. These resources are useful for deciding whether a <strong>Nostalrius old-school server</strong> fits your preferred pace.</p><ol><li>Open the official Server Info and confirm the current status, selected profile, and host.</li><li>Use the official How to Play / Downloads article for the current client path.</li><li>Read the rules and understand stamina, blessings, skull, guild, and death-loss systems.</li><li>Use the official Wiki collections to plan tasks, equipment, quests, and boss access.</li><li>Compare the dated directory snapshot with current status before committing to a character.</li></ol></section>
          <section id="sources"><SectionHeading>Sources &amp; verification</SectionHeading><p>This page uses Nostalrius’ official Server Info and Wiki taxonomy as its primary research trail, with the OpenTibiaServers record used for the labeled activity snapshot. The community archive excerpt currently associated with Nostalrius is historical and should not be read as a current announcement.</p><div className="grid gap-3 md:grid-cols-2">{links.map(([label, href]) => <SourceLink key={href} href={href} label={label} />)}</div></section>
          <DirectoryRecommendation />
          <section id="external-links"><SectionHeading>External links</SectionHeading><ul>{links.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>
        </article>
        <aside className="cyntara-wiki__sidebar"><div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">Nostalrius</div><ServerLogo server={{ name: 'Nostalrius', slug: 'nostalrius', host: 'nostalrius.com.br' }} size="profile" /><table><tbody><tr><th>Client</th><td>7.4</td></tr><tr><th>World</th><td>Retro Open PvP</td></tr><tr><th>Host</th><td><code>on.nostalrius.com.br:7171</code></td></tr><tr><th>EXP stages</th><td>15× to 1.3×</td></tr><tr><th>Loot</th><td>Custom</td></tr><tr><th>Server save</th><td>06:00 GMT−3</td></tr><tr><th>Players snapshot</th><td>715 / 2,000</td></tr><tr><th>Uptime snapshot</th><td>98.87%</td></tr><tr><th>Systems</th><td>Forge, tiers, tasks, bosses, events</td></tr><tr><th>Website</th><td><a href="https://home.nostalrius.com.br/serverinfo" target="_blank" rel="nofollow noopener noreferrer">home.nostalrius.com.br</a></td></tr></tbody></table></div><div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Use the official How to Play article and confirm the current client and host.</p><a href="https://wiki.nostalrius.com.br/#/a/como-jogar" target="_blank" rel="nofollow noopener noreferrer">Open official guide</a></div><div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Nostalrius with other classic and modern Open Tibia worlds.</p><a className="cyntara-wiki__button" href="/">Browse server listings</a></div></aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) { return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>; }
function Table({ headers, rows }) { return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td key={`${row[0]}-${index}`}>{index === 1 ? <strong>{value}</strong> : value}</td>)}</tr>)}</tbody></table></div>; }
function ExternalLink({ href, children }) { const external = href.startsWith('http'); return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>; }
function SourceLink({ href, label }) { return <ExternalLink href={href}><span className="block rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</span></ExternalLink>; }
