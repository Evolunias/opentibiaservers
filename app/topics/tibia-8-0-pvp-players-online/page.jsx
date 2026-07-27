import Tibia80PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpPlayersOnlineKeywordPage />;
}
