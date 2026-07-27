import OldSchoolOtmadnessOtServerKeywordPage, { generateMetadata } from './old-school-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessOtServerKeywordPage />;
}
