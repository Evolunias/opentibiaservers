import DragonBallLegendEuropeServerKeywordPage, { generateMetadata } from './dragon-ball-legend-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendEuropeServerKeywordPage />;
}
