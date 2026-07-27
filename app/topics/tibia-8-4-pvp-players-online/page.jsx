import Tibia84PvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-4-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpPlayersOnlineKeywordPage />;
}
