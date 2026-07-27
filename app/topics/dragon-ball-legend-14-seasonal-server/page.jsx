import DragonBallLegend14SeasonalServerKeywordPage, { generateMetadata } from './dragon-ball-legend-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegend14SeasonalServerKeywordPage />;
}
