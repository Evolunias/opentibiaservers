import WithActivePlayersWikiPolandKeywordPage, { generateMetadata } from './with-active-players-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiPolandKeywordPage />;
}
