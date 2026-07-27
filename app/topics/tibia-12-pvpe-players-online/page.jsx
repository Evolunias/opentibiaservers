import Tibia12PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpePlayersOnlineKeywordPage />;
}
