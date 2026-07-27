import TopDuraOnlineDownloadKeywordPage, { generateMetadata } from './top-dura-online-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDuraOnlineDownloadKeywordPage />;
}
