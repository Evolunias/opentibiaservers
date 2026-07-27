import OldSchoolArchlightDownloadKeywordPage, { generateMetadata } from './old-school-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightDownloadKeywordPage />;
}
