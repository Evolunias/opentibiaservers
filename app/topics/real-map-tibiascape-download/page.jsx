import RealMapTibiascapeDownloadKeywordPage, { generateMetadata } from './real-map-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeDownloadKeywordPage />;
}
