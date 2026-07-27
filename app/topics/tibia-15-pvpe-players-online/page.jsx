import Tibia15PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpePlayersOnlineKeywordPage />;
}
