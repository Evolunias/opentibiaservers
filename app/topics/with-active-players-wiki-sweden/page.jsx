import WithActivePlayersWikiSwedenKeywordPage, { generateMetadata } from './with-active-players-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiSwedenKeywordPage />;
}
