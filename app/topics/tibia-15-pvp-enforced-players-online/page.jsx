import Tibia15PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedPlayersOnlineKeywordPage />;
}
