import OldSchoolDragonBallLegendOtKeywordPage, { generateMetadata } from './old-school-dragon-ball-legend-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDragonBallLegendOtKeywordPage />;
}
