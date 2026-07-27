import OldSchoolDuraOnlineDownloadKeywordPage, { generateMetadata } from './old-school-dura-online-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineDownloadKeywordPage />;
}
