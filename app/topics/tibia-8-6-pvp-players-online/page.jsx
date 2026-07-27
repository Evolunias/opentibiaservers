import Tibia86PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpPlayersOnlineKeywordPage />;
}
