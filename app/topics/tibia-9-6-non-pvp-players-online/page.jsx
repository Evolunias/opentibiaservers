import Tibia96NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpPlayersOnlineKeywordPage />;
}
