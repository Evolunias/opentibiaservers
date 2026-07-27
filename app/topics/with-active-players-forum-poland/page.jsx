import WithActivePlayersForumPolandKeywordPage, { generateMetadata } from './with-active-players-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumPolandKeywordPage />;
}
