import Tibia13SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalPlayersOnlineKeywordPage />;
}
