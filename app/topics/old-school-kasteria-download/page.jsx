import OldSchoolKasteriaDownloadKeywordPage, { generateMetadata } from './old-school-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaDownloadKeywordPage />;
}
