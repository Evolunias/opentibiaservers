import WithActivePlayersForumLatinAmericaKeywordPage, { generateMetadata } from './with-active-players-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumLatinAmericaKeywordPage />;
}
