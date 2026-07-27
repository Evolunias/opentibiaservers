import RealMapTibiameKeywordPage, { generateMetadata } from './real-map-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiameKeywordPage />;
}
