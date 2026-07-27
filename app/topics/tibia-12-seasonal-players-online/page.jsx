import Tibia12SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12SeasonalPlayersOnlineKeywordPage />;
}
