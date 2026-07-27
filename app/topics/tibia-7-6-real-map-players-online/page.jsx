import Tibia76RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RealMapPlayersOnlineKeywordPage />;
}
