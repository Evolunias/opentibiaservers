import OldSchoolInfernalOtGuideKeywordPage, { generateMetadata } from './old-school-infernal-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolInfernalOtGuideKeywordPage />;
}
