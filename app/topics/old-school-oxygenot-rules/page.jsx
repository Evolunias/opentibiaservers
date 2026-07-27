import OldSchoolOxygenotRulesKeywordPage, { generateMetadata } from './old-school-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotRulesKeywordPage />;
}
