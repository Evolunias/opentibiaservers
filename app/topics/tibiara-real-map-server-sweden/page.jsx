import TibiaraRealMapServerSwedenKeywordPage, { generateMetadata } from './tibiara-real-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRealMapServerSwedenKeywordPage />;
}
