import BestArchlightDownloadKeywordPage, { generateMetadata } from './best-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightDownloadKeywordPage />;
}
