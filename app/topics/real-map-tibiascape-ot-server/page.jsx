import RealMapTibiascapeOtServerKeywordPage, { generateMetadata } from './real-map-tibiascape-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeOtServerKeywordPage />;
}
