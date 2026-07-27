import OldSchoolOtmadnessRulesKeywordPage, { generateMetadata } from './old-school-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessRulesKeywordPage />;
}
