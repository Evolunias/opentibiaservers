import WithActivePlayersWikiUsaKeywordPage, { generateMetadata } from './with-active-players-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiUsaKeywordPage />;
}
