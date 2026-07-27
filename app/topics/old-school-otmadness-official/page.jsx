import OldSchoolOtmadnessOfficialKeywordPage, { generateMetadata } from './old-school-otmadness-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessOfficialKeywordPage />;
}
