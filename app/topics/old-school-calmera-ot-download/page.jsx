import OldSchoolCalmeraOtDownloadKeywordPage, { generateMetadata } from './old-school-calmera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtDownloadKeywordPage />;
}
