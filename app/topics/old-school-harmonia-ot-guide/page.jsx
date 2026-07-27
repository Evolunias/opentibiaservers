import OldSchoolHarmoniaOtGuideKeywordPage, { generateMetadata } from './old-school-harmonia-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtGuideKeywordPage />;
}
