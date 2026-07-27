import OldSchoolDragonBallLegendOtsKeywordPage, { generateMetadata } from './old-school-dragon-ball-legend-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDragonBallLegendOtsKeywordPage />;
}
