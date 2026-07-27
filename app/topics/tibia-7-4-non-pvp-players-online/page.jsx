import Tibia74NonPvpPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpPlayersOnlineKeywordPage />;
}
