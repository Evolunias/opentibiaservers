import NewDragonBallLegendGuideKeywordPage, { generateMetadata } from './new-dragon-ball-legend-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDragonBallLegendGuideKeywordPage />;
}
