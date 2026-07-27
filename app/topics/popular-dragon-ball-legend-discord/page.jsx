import PopularDragonBallLegendDiscordKeywordPage, { generateMetadata } from './popular-dragon-ball-legend-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDragonBallLegendDiscordKeywordPage />;
}
