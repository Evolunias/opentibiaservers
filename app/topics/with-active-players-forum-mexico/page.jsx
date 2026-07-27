import WithActivePlayersForumMexicoKeywordPage, { generateMetadata } from './with-active-players-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumMexicoKeywordPage />;
}
