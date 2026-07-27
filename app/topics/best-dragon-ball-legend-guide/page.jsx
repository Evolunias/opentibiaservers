import BestDragonBallLegendGuideKeywordPage, { generateMetadata } from './best-dragon-ball-legend-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDragonBallLegendGuideKeywordPage />;
}
