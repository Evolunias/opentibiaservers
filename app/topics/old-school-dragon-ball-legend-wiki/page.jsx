import OldSchoolDragonBallLegendWikiKeywordPage, { generateMetadata } from './old-school-dragon-ball-legend-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDragonBallLegendWikiKeywordPage />;
}
