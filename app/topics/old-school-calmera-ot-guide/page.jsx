import OldSchoolCalmeraOtGuideKeywordPage, { generateMetadata } from './old-school-calmera-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtGuideKeywordPage />;
}
