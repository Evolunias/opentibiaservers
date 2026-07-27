import OldSchoolOtmadnessClientKeywordPage, { generateMetadata } from './old-school-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessClientKeywordPage />;
}
