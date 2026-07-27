import RealMapTibiascapePrivateServerKeywordPage, { generateMetadata } from './real-map-tibiascape-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapePrivateServerKeywordPage />;
}
