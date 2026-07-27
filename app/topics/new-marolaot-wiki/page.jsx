import NewMarolaotWikiKeywordPage, { generateMetadata } from './new-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotWikiKeywordPage />;
}
