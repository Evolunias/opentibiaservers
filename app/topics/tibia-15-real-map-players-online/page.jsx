import Tibia15RealMapPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-real-map-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapPlayersOnlineKeywordPage />;
}
