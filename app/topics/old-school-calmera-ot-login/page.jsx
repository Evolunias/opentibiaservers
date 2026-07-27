import OldSchoolCalmeraOtLoginKeywordPage, { generateMetadata } from './old-school-calmera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtLoginKeywordPage />;
}
