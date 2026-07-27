import OldSchoolClassicusRulesKeywordPage, { generateMetadata } from './old-school-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusRulesKeywordPage />;
}
