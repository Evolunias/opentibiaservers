import DragonBallLegendMarketKeywordPage, { generateMetadata } from './dragon-ball-legend-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendMarketKeywordPage />;
}
