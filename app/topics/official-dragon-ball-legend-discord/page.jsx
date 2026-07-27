import OfficialDragonBallLegendDiscordKeywordPage, { generateMetadata } from './official-dragon-ball-legend-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDragonBallLegendDiscordKeywordPage />;
}
