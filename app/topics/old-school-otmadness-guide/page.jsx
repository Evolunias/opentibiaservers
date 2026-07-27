import OldSchoolOtmadnessGuideKeywordPage, { generateMetadata } from './old-school-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessGuideKeywordPage />;
}
