import TibiaRealMapServerClientKeywordPage, { generateMetadata } from './tibia-real-map-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerClientKeywordPage />;
}
