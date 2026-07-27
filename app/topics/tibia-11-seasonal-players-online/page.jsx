import Tibia11SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalPlayersOnlineKeywordPage />;
}
