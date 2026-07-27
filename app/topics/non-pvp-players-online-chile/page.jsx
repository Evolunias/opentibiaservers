import NonPvpPlayersOnlineChileKeywordPage, { generateMetadata } from './non-pvp-players-online-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpPlayersOnlineChileKeywordPage />;
}
