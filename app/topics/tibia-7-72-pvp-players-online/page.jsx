import Tibia772PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-72-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpPlayersOnlineKeywordPage />;
}
