import WithActivePlayersForumEuropeKeywordPage, { generateMetadata } from './with-active-players-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumEuropeKeywordPage />;
}
