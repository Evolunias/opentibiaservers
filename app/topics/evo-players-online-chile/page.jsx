import EvoPlayersOnlineChileKeywordPage, { generateMetadata } from './evo-players-online-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoPlayersOnlineChileKeywordPage />;
}
