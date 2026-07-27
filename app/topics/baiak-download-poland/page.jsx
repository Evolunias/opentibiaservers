import BaiakDownloadPolandKeywordPage, { generateMetadata } from './baiak-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadPolandKeywordPage />;
}
