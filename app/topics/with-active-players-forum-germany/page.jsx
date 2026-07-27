import WithActivePlayersForumGermanyKeywordPage, { generateMetadata } from './with-active-players-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumGermanyKeywordPage />;
}
