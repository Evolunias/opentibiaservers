import BaiakDownloadEuropeKeywordPage, { generateMetadata } from './baiak-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadEuropeKeywordPage />;
}
