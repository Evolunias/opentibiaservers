import NewSeasonDragonBallLegendGuideKeywordPage, { generateMetadata } from './new-season-dragon-ball-legend-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDragonBallLegendGuideKeywordPage />;
}
