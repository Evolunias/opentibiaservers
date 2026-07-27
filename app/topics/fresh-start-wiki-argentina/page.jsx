import FreshStartWikiArgentinaKeywordPage, { generateMetadata } from './fresh-start-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiArgentinaKeywordPage />;
}
