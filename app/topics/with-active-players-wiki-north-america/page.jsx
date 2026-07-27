import WithActivePlayersWikiNorthAmericaKeywordPage, { generateMetadata } from './with-active-players-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiNorthAmericaKeywordPage />;
}
