import LowrateMarolaotWikiKeywordPage, { generateMetadata } from './lowrate-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMarolaotWikiKeywordPage />;
}
