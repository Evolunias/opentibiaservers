import WithActivePlayersWikiLatinAmericaKeywordPage, { generateMetadata } from './with-active-players-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiLatinAmericaKeywordPage />;
}
