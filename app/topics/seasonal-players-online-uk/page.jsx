import SeasonalPlayersOnlineUkKeywordPage, { generateMetadata } from './seasonal-players-online-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalPlayersOnlineUkKeywordPage />;
}
