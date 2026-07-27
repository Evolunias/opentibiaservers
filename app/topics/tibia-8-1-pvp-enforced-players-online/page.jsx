import Tibia81PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpEnforcedPlayersOnlineKeywordPage />;
}
