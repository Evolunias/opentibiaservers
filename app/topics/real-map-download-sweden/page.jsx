import RealMapDownloadSwedenKeywordPage, { generateMetadata } from './real-map-download-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadSwedenKeywordPage />;
}
