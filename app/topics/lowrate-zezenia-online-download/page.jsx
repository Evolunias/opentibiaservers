import LowrateZezeniaOnlineDownloadKeywordPage, { generateMetadata } from './lowrate-zezenia-online-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZezeniaOnlineDownloadKeywordPage />;
}
