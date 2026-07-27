import HighrateMarolaotWikiKeywordPage, { generateMetadata } from './highrate-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMarolaotWikiKeywordPage />;
}
