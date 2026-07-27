import FreshStartWikiGermanyKeywordPage, { generateMetadata } from './fresh-start-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiGermanyKeywordPage />;
}
