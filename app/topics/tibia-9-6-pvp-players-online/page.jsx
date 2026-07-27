import Tibia96PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpPlayersOnlineKeywordPage />;
}
