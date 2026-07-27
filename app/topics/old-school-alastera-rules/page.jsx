import OldSchoolAlasteraRulesKeywordPage, { generateMetadata } from './old-school-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraRulesKeywordPage />;
}
