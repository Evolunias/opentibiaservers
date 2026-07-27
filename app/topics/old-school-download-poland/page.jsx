import OldSchoolDownloadPolandKeywordPage, { generateMetadata } from './old-school-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadPolandKeywordPage />;
}
