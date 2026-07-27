import RealMapTibiascapeServerKeywordPage, { generateMetadata } from './real-map-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeServerKeywordPage />;
}
