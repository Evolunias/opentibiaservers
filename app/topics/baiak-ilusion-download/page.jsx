import BaiakIlusionDownloadKeywordPage, { generateMetadata } from './baiak-ilusion-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionDownloadKeywordPage />;
}
