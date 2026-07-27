import SeasonalPlayersOnlinePolandKeywordPage, { generateMetadata } from './seasonal-players-online-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalPlayersOnlinePolandKeywordPage />;
}
