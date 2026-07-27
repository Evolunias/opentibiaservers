import RealMapTibiameServersKeywordPage, { generateMetadata } from './real-map-tibiame-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiameServersKeywordPage />;
}
