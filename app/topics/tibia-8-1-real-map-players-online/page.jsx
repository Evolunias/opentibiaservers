import Tibia81RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RealMapPlayersOnlineKeywordPage />;
}
