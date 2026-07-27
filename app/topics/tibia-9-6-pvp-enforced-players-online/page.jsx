import Tibia96PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpEnforcedPlayersOnlineKeywordPage />;
}
