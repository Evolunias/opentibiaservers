import RealMapTibijkaDownloadKeywordPage, { generateMetadata } from './real-map-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaDownloadKeywordPage />;
}
