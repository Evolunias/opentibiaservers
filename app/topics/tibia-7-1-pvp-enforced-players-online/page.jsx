import Tibia71PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpEnforcedPlayersOnlineKeywordPage />;
}
