import Tibia71PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpePlayersOnlineKeywordPage />;
}
