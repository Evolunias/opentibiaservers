import OldSchoolInfernalOtRulesKeywordPage, { generateMetadata } from './old-school-infernal-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolInfernalOtRulesKeywordPage />;
}
