import FreshStartWikiMexicoKeywordPage, { generateMetadata } from './fresh-start-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiMexicoKeywordPage />;
}
