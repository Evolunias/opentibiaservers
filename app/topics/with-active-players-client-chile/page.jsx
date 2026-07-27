import WithActivePlayersClientChileKeywordPage, { generateMetadata } from './with-active-players-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientChileKeywordPage />;
}
