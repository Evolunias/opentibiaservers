import WithActivePlayersForumUkKeywordPage, { generateMetadata } from './with-active-players-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumUkKeywordPage />;
}
