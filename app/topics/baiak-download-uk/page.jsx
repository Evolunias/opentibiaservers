import BaiakDownloadUkKeywordPage, { generateMetadata } from './baiak-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadUkKeywordPage />;
}
