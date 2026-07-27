import OldSchoolOlderaDownloadKeywordPage, { generateMetadata } from './old-school-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaDownloadKeywordPage />;
}
