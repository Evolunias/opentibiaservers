import Tibia76PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpePlayersOnlineKeywordPage />;
}
