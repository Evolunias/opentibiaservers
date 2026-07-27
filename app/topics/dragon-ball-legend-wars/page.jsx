import DragonBallLegendWarsKeywordPage, { generateMetadata } from './dragon-ball-legend-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendWarsKeywordPage />;
}
