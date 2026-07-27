import FreshStartWikiEuropeKeywordPage, { generateMetadata } from './fresh-start-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiEuropeKeywordPage />;
}
