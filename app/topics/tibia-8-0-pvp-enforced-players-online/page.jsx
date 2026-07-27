import Tibia80PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpEnforcedPlayersOnlineKeywordPage />;
}
