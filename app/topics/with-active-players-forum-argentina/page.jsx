import WithActivePlayersForumArgentinaKeywordPage, { generateMetadata } from './with-active-players-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumArgentinaKeywordPage />;
}
