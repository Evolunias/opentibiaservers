import CurrentArchlightDownloadKeywordPage, { generateMetadata } from './current-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightDownloadKeywordPage />;
}
