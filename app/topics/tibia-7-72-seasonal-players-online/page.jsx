import Tibia772SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-72-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772SeasonalPlayersOnlineKeywordPage />;
}
