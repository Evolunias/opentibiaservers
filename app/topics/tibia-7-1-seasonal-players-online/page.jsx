import Tibia71SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalPlayersOnlineKeywordPage />;
}
