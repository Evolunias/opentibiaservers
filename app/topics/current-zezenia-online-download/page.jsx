import CurrentZezeniaOnlineDownloadKeywordPage, { generateMetadata } from './current-zezenia-online-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineDownloadKeywordPage />;
}
