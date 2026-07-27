import OldSchoolDownloadMexicoKeywordPage, { generateMetadata } from './old-school-download-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadMexicoKeywordPage />;
}
