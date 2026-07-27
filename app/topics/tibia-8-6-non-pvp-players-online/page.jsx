import Tibia86NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpPlayersOnlineKeywordPage />;
}
