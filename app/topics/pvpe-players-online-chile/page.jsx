import PvpePlayersOnlineChileKeywordPage, { generateMetadata } from './pvpe-players-online-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlineChileKeywordPage />;
}
