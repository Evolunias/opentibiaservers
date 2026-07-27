import SeasonalPlayersOnlineCanadaKeywordPage, { generateMetadata } from './seasonal-players-online-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalPlayersOnlineCanadaKeywordPage />;
}
