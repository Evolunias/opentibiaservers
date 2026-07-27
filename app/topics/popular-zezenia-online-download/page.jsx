import PopularZezeniaOnlineDownloadKeywordPage, { generateMetadata } from './popular-zezenia-online-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZezeniaOnlineDownloadKeywordPage />;
}
