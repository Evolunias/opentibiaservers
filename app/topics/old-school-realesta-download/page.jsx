import OldSchoolRealestaDownloadKeywordPage, { generateMetadata } from './old-school-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaDownloadKeywordPage />;
}
