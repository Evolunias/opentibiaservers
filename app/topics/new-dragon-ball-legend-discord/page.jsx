import NewDragonBallLegendDiscordKeywordPage, { generateMetadata } from './new-dragon-ball-legend-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDragonBallLegendDiscordKeywordPage />;
}
