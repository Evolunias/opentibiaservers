import TopArchlightDownloadKeywordPage, { generateMetadata } from './top-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightDownloadKeywordPage />;
}
