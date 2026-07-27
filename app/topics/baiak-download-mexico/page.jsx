import BaiakDownloadMexicoKeywordPage, { generateMetadata } from './baiak-download-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadMexicoKeywordPage />;
}
