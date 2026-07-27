import Tibia11PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpePlayersOnlineKeywordPage />;
}
