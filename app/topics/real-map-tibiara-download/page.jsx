import RealMapTibiaraDownloadKeywordPage, { generateMetadata } from './real-map-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraDownloadKeywordPage />;
}
