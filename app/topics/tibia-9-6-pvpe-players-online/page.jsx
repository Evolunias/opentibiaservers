import Tibia96PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpePlayersOnlineKeywordPage />;
}
