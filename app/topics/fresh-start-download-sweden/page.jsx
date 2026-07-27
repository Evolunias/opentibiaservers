import FreshStartDownloadSwedenKeywordPage, { generateMetadata } from './fresh-start-download-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDownloadSwedenKeywordPage />;
}
