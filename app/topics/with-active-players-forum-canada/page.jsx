import WithActivePlayersForumCanadaKeywordPage, { generateMetadata } from './with-active-players-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersForumCanadaKeywordPage />;
}
