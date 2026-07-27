import OldSchoolMediviaRulesKeywordPage, { generateMetadata } from './old-school-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaRulesKeywordPage />;
}
