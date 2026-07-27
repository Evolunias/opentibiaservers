import RealMapTibiascapeServersKeywordPage, { generateMetadata } from './real-map-tibiascape-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeServersKeywordPage />;
}
