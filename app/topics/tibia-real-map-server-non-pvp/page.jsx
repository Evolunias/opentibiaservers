import TibiaRealMapServerNonPvpKeywordPage, { generateMetadata } from './tibia-real-map-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerNonPvpKeywordPage />;
}
