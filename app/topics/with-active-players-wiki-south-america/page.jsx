import WithActivePlayersWikiSouthAmericaKeywordPage, { generateMetadata } from './with-active-players-wiki-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiSouthAmericaKeywordPage />;
}
