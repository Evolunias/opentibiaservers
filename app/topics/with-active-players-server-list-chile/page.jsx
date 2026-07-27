import WithActivePlayersServerListChileKeywordPage, { generateMetadata } from './with-active-players-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersServerListChileKeywordPage />;
}
