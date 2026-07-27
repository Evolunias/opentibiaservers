import DragonBallLegend12SeasonalServerKeywordPage, { generateMetadata } from './dragon-ball-legend-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegend12SeasonalServerKeywordPage />;
}
