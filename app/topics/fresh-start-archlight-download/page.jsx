import FreshStartArchlightDownloadKeywordPage, { generateMetadata } from './fresh-start-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightDownloadKeywordPage />;
}
