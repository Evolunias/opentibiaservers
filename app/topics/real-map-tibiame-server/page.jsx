import RealMapTibiameServerKeywordPage, { generateMetadata } from './real-map-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiameServerKeywordPage />;
}
