import TopMarolaotWikiKeywordPage, { generateMetadata } from './top-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotWikiKeywordPage />;
}
