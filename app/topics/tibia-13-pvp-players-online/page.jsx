import Tibia13PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpPlayersOnlineKeywordPage />;
}
