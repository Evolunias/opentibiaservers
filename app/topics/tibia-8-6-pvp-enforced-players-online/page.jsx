import Tibia86PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpEnforcedPlayersOnlineKeywordPage />;
}
