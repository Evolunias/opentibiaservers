import Tibia1098PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-98-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpePlayersOnlineKeywordPage />;
}
