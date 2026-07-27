import RealMapDownloadGermanyKeywordPage, { generateMetadata } from './real-map-download-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadGermanyKeywordPage />;
}
