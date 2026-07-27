import Tibia100PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-10-0-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpEnforcedPlayersOnlineKeywordPage />;
}
