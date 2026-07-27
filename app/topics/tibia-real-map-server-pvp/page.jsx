import TibiaRealMapServerPvpKeywordPage, { generateMetadata } from './tibia-real-map-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerPvpKeywordPage />;
}
