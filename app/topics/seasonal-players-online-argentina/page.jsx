import SeasonalPlayersOnlineArgentinaKeywordPage, { generateMetadata } from './seasonal-players-online-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalPlayersOnlineArgentinaKeywordPage />;
}
