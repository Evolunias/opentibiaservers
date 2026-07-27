import WithActivePlayersWikiGermanyKeywordPage, { generateMetadata } from './with-active-players-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiGermanyKeywordPage />;
}
