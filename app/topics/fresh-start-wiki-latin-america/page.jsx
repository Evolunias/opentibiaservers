import FreshStartWikiLatinAmericaKeywordPage, { generateMetadata } from './fresh-start-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiLatinAmericaKeywordPage />;
}
