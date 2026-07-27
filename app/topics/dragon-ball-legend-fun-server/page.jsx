import DragonBallLegendFunServerKeywordPage, { generateMetadata } from './dragon-ball-legend-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendFunServerKeywordPage />;
}
