import OldSchoolMediviaDownloadKeywordPage, { generateMetadata } from './old-school-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaDownloadKeywordPage />;
}
