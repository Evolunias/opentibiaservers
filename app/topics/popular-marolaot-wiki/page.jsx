import PopularMarolaotWikiKeywordPage, { generateMetadata } from './popular-marolaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotWikiKeywordPage />;
}
