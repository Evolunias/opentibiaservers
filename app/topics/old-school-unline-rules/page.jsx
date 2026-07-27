import OldSchoolUnlineRulesKeywordPage, { generateMetadata } from './old-school-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineRulesKeywordPage />;
}
