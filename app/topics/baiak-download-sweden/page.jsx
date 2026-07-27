import BaiakDownloadSwedenKeywordPage, { generateMetadata } from './baiak-download-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadSwedenKeywordPage />;
}
