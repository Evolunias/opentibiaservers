import ActiveArchlightDownloadKeywordPage, { generateMetadata } from './active-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightDownloadKeywordPage />;
}
