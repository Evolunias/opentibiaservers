import Tibia13NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpPlayersOnlineKeywordPage />;
}
