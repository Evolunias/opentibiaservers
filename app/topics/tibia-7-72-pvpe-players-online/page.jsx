import Tibia772PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-72-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpePlayersOnlineKeywordPage />;
}
