import Tibia74SeasonalPlayersOnlineKeywordPage, { generateMetadata } from './tibia-7-4-seasonal-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74SeasonalPlayersOnlineKeywordPage />;
}
