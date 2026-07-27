import OldSchoolSabrehavenRulesKeywordPage, { generateMetadata } from './old-school-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenRulesKeywordPage />;
}
