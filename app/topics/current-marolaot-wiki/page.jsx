import CurrentMarolaotWikiKeywordPage, { generateMetadata } from './current-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotWikiKeywordPage />;
}
