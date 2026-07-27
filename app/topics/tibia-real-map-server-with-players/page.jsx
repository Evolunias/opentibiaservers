import TibiaRealMapServerWithPlayersKeywordPage, { generateMetadata } from './tibia-real-map-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerWithPlayersKeywordPage />;
}
