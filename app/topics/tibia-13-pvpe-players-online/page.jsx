import Tibia13PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpePlayersOnlineKeywordPage />;
}
