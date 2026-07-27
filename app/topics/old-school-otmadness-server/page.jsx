import OldSchoolOtmadnessServerKeywordPage, { generateMetadata } from './old-school-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessServerKeywordPage />;
}
