import Tibia100PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpePlayersOnlineKeywordPage />;
}
