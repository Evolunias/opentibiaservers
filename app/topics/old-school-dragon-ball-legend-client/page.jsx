import OldSchoolDragonBallLegendClientKeywordPage, { generateMetadata } from './old-school-dragon-ball-legend-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDragonBallLegendClientKeywordPage />;
}
