import OldSchoolClassicusDownloadKeywordPage, { generateMetadata } from './old-school-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusDownloadKeywordPage />;
}
