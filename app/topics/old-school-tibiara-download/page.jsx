import OldSchoolTibiaraDownloadKeywordPage, { generateMetadata } from './old-school-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraDownloadKeywordPage />;
}
