import OldSchoolOtmadnessKeywordPage, { generateMetadata } from './old-school-otmadness';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessKeywordPage />;
}
