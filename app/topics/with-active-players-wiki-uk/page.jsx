import WithActivePlayersWikiUkKeywordPage, { generateMetadata } from './with-active-players-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiUkKeywordPage />;
}
