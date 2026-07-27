import RealMapTibiameClientKeywordPage, { generateMetadata } from './real-map-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiameClientKeywordPage />;
}
