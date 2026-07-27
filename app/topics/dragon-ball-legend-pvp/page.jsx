import DragonBallLegendPvpKeywordPage, { generateMetadata } from './dragon-ball-legend-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendPvpKeywordPage />;
}
