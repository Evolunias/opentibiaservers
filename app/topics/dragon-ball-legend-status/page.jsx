import DragonBallLegendStatusKeywordPage, { generateMetadata } from './dragon-ball-legend-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendStatusKeywordPage />;
}
