import WithActivePlayersForumSwedenKeywordPage, { generateMetadata } from './with-active-players-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumSwedenKeywordPage />;
}
