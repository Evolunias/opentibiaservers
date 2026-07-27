import OfficialArchlightDownloadKeywordPage, { generateMetadata } from './official-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightDownloadKeywordPage />;
}
