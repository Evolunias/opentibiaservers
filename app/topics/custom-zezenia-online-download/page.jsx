import CustomZezeniaOnlineDownloadKeywordPage, { generateMetadata } from './custom-zezenia-online-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineDownloadKeywordPage />;
}
