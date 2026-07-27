import Tibia14PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpePlayersOnlineKeywordPage />;
}
