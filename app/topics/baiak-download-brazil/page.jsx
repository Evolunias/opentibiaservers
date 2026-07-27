import BaiakDownloadBrazilKeywordPage, { generateMetadata } from './baiak-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadBrazilKeywordPage />;
}
