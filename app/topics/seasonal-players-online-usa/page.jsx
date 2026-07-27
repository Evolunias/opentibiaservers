import SeasonalPlayersOnlineUsaKeywordPage, { generateMetadata } from './seasonal-players-online-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalPlayersOnlineUsaKeywordPage />;
}
