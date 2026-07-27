import SeasonalPlayersOnlineChileKeywordPage, { generateMetadata } from './seasonal-players-online-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalPlayersOnlineChileKeywordPage />;
}
