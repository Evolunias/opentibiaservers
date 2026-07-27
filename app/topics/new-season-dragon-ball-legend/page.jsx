import NewSeasonDragonBallLegendKeywordPage, { generateMetadata } from './new-season-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDragonBallLegendKeywordPage />;
}
