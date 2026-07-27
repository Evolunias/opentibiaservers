import OldSchoolThaisotRulesKeywordPage, { generateMetadata } from './old-school-thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotRulesKeywordPage />;
}
