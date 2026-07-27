import OldSchoolDragonBallLegendForumKeywordPage, { generateMetadata } from './old-school-dragon-ball-legend-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDragonBallLegendForumKeywordPage />;
}
