import OldSchoolCalmeraOtOtsKeywordPage, { generateMetadata } from './old-school-calmera-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtOtsKeywordPage />;
}
