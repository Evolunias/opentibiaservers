import OldSchoolDragonBallLegendLoginKeywordPage, { generateMetadata } from './old-school-dragon-ball-legend-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDragonBallLegendLoginKeywordPage />;
}
