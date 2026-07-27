import Tibia84PvpEnforcedPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-4-pvp-enforced-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpEnforcedPlayersOnlineKeywordPage />;
}
