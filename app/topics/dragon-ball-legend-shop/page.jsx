import DragonBallLegendShopKeywordPage, { generateMetadata } from './dragon-ball-legend-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendShopKeywordPage />;
}
