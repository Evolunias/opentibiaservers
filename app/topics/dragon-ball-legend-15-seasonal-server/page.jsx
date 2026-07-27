import DragonBallLegend15SeasonalServerKeywordPage, { generateMetadata } from './dragon-ball-legend-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegend15SeasonalServerKeywordPage />;
}
