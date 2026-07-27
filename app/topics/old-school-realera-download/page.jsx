import OldSchoolRealeraDownloadKeywordPage, { generateMetadata } from './old-school-realera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraDownloadKeywordPage />;
}
