import OldSchoolNepreniaDownloadKeywordPage, { generateMetadata } from './old-school-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaDownloadKeywordPage />;
}
