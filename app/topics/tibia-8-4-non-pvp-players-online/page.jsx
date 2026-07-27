import Tibia84NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpPlayersOnlineKeywordPage />;
}
