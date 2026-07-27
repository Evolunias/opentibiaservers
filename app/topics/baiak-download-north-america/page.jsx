import BaiakDownloadNorthAmericaKeywordPage, { generateMetadata } from './baiak-download-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadNorthAmericaKeywordPage />;
}
