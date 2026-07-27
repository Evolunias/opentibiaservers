import DragonBallLegendHighExpKeywordPage, { generateMetadata } from './dragon-ball-legend-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendHighExpKeywordPage />;
}
