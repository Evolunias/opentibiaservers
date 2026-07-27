import RealMapDownloadEuropeKeywordPage, { generateMetadata } from './real-map-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDownloadEuropeKeywordPage />;
}
