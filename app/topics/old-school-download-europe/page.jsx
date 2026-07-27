import OldSchoolDownloadEuropeKeywordPage, { generateMetadata } from './old-school-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadEuropeKeywordPage />;
}
