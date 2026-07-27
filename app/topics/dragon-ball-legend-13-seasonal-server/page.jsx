import DragonBallLegend13SeasonalServerKeywordPage, { generateMetadata } from './dragon-ball-legend-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegend13SeasonalServerKeywordPage />;
}
