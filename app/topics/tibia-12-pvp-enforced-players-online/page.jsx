import Tibia12PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedPlayersOnlineKeywordPage />;
}
