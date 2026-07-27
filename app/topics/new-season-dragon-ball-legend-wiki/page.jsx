import NewSeasonDragonBallLegendWikiKeywordPage, { generateMetadata } from './new-season-dragon-ball-legend-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDragonBallLegendWikiKeywordPage />;
}
