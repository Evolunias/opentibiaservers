import Tibia13RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapPlayersOnlineKeywordPage />;
}
