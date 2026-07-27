import WithActivePlayersForumNorthAmericaKeywordPage, { generateMetadata } from './with-active-players-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumNorthAmericaKeywordPage />;
}
