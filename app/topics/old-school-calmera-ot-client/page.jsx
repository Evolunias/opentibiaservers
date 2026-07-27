import OldSchoolCalmeraOtClientKeywordPage, { generateMetadata } from './old-school-calmera-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtClientKeywordPage />;
}
