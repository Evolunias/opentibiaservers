import OldSchoolEvoleraRulesKeywordPage, { generateMetadata } from './old-school-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraRulesKeywordPage />;
}
