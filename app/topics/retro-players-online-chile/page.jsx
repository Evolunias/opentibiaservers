import RetroPlayersOnlineChileKeywordPage, { generateMetadata } from './retro-players-online-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroPlayersOnlineChileKeywordPage />;
}
