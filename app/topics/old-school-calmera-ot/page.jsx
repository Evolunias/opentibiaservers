import OldSchoolCalmeraOtKeywordPage, { generateMetadata } from './old-school-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtKeywordPage />;
}
