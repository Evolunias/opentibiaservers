import DragonBallLegendAlternativesKeywordPage, { generateMetadata } from './dragon-ball-legend-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendAlternativesKeywordPage />;
}
