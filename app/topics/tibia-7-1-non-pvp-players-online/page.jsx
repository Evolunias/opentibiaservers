import Tibia71NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpPlayersOnlineKeywordPage />;
}
