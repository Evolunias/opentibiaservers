import TibiaRealMapServerRealMapKeywordPage, { generateMetadata } from './tibia-real-map-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerRealMapKeywordPage />;
}
