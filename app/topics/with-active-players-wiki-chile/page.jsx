import WithActivePlayersWikiChileKeywordPage, { generateMetadata } from './with-active-players-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiChileKeywordPage />;
}
