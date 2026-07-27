import WithDiscordDragonBallLegendWikiKeywordPage, { generateMetadata } from './with-discord-dragon-ball-legend-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDragonBallLegendWikiKeywordPage />;
}
