import DragonBallLegendSeasonKeywordPage, { generateMetadata } from './dragon-ball-legend-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendSeasonKeywordPage />;
}
