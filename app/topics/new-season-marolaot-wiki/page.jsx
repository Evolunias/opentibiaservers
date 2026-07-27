import NewSeasonMarolaotWikiKeywordPage, { generateMetadata } from './new-season-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotWikiKeywordPage />;
}
