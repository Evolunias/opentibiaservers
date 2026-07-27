import OldSchoolCarlinotRulesKeywordPage, { generateMetadata } from './old-school-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotRulesKeywordPage />;
}
