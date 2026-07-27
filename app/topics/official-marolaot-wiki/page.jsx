import OfficialMarolaotWikiKeywordPage, { generateMetadata } from './official-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotWikiKeywordPage />;
}
