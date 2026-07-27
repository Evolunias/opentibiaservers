import OldSchoolCalmeraOtRulesKeywordPage, { generateMetadata } from './old-school-calmera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtRulesKeywordPage />;
}
