import WithActivePlayersForumChileKeywordPage, { generateMetadata } from './with-active-players-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumChileKeywordPage />;
}
