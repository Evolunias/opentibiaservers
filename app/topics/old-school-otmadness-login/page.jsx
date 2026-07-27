import OldSchoolOtmadnessLoginKeywordPage, { generateMetadata } from './old-school-otmadness-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessLoginKeywordPage />;
}
