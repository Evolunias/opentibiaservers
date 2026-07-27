import Tibia86PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpePlayersOnlineKeywordPage />;
}
