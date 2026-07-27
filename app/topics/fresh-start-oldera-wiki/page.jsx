import FreshStartOlderaWikiKeywordPage, { generateMetadata } from './fresh-start-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOlderaWikiKeywordPage />;
}
