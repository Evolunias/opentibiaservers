import OldSchoolMarolaotRulesKeywordPage, { generateMetadata } from './old-school-marolaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotRulesKeywordPage />;
}
