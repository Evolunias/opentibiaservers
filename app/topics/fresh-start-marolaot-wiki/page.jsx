import FreshStartMarolaotWikiKeywordPage, { generateMetadata } from './fresh-start-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMarolaotWikiKeywordPage />;
}
