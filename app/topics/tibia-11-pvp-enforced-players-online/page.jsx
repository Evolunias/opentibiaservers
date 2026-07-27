import Tibia11PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedPlayersOnlineKeywordPage />;
}
