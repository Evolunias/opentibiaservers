import Tibia84SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalPlayersOnlineKeywordPage />;
}
