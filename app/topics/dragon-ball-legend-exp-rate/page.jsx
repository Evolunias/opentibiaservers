import DragonBallLegendExpRateKeywordPage, { generateMetadata } from './dragon-ball-legend-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendExpRateKeywordPage />;
}
