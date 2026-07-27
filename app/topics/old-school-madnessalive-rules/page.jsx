import OldSchoolMadnessaliveRulesKeywordPage, { generateMetadata } from './old-school-madnessalive-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMadnessaliveRulesKeywordPage />;
}
