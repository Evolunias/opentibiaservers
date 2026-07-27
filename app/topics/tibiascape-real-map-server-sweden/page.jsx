import TibiascapeRealMapServerSwedenKeywordPage, { generateMetadata } from './tibiascape-real-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeRealMapServerSwedenKeywordPage />;
}
