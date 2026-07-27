import OldSchoolDragonBallLegendRulesKeywordPage, { generateMetadata } from './old-school-dragon-ball-legend-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDragonBallLegendRulesKeywordPage />;
}
