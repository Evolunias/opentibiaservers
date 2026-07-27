import BaiakDownloadUsaKeywordPage, { generateMetadata } from './baiak-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadUsaKeywordPage />;
}
