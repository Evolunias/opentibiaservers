import VenoreotRealMapServerSwedenKeywordPage, { generateMetadata } from './venoreot-real-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRealMapServerSwedenKeywordPage />;
}
