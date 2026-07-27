import Tibia84PvpePlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpePlayersOnlineKeywordPage />;
}
