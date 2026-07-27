import Tibia76PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpEnforcedPlayersOnlineKeywordPage />;
}
