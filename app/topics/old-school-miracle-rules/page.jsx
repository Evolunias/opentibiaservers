import OldSchoolMiracleRulesKeywordPage, { generateMetadata } from './old-school-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleRulesKeywordPage />;
}
