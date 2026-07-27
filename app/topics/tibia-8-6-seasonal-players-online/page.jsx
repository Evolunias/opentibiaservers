import Tibia86SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86SeasonalPlayersOnlineKeywordPage />;
}
