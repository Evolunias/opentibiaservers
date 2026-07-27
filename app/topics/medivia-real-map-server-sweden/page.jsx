import MediviaRealMapServerSwedenKeywordPage, { generateMetadata } from './medivia-real-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapServerSwedenKeywordPage />;
}
