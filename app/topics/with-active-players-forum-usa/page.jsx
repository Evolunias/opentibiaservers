import WithActivePlayersForumUsaKeywordPage, { generateMetadata } from './with-active-players-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumUsaKeywordPage />;
}
