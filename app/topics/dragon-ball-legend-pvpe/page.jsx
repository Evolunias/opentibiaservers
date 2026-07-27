import DragonBallLegendPvpeKeywordPage, { generateMetadata } from './dragon-ball-legend-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendPvpeKeywordPage />;
}
