import Tibia15SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalPlayersOnlineKeywordPage />;
}
