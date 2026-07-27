import Tibia12RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapPlayersOnlineKeywordPage />;
}
