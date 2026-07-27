import FreshStartWikiSwedenKeywordPage, { generateMetadata } from './fresh-start-wiki-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiSwedenKeywordPage />;
}
