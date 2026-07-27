import Tibia76SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalPlayersOnlineKeywordPage />;
}
