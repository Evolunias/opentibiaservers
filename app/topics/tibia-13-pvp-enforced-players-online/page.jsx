import Tibia13PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedPlayersOnlineKeywordPage />;
}
