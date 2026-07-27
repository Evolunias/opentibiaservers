import TibiaRealMapServerSeasonKeywordPage, { generateMetadata } from './tibia-real-map-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerSeasonKeywordPage />;
}
