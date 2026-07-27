import TibiaRealMapServerDownloadKeywordPage, { generateMetadata } from './tibia-real-map-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerDownloadKeywordPage />;
}
