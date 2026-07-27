import WithActivePlayersForumBrazilKeywordPage, { generateMetadata } from './with-active-players-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumBrazilKeywordPage />;
}
