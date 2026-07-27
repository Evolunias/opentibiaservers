import RealMapTibiameDownloadKeywordPage, { generateMetadata } from './real-map-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiameDownloadKeywordPage />;
}
