import PvpeDownloadSwedenKeywordPage, { generateMetadata } from './pvpe-download-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDownloadSwedenKeywordPage />;
}
