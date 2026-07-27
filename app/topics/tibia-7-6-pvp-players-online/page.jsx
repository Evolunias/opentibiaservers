import Tibia76PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpPlayersOnlineKeywordPage />;
}
