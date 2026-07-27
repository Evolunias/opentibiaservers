import Tibia96SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-9-6-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96SeasonalPlayersOnlineKeywordPage />;
}
