import WithActivePlayersWikiCanadaKeywordPage, { generateMetadata } from './with-active-players-wiki-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiCanadaKeywordPage />;
}
