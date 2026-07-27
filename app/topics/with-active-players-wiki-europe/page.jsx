import WithActivePlayersWikiEuropeKeywordPage, { generateMetadata } from './with-active-players-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiEuropeKeywordPage />;
}
