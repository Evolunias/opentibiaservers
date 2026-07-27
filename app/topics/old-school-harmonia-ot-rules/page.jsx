import OldSchoolHarmoniaOtRulesKeywordPage, { generateMetadata } from './old-school-harmonia-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtRulesKeywordPage />;
}
