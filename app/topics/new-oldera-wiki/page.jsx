import NewOlderaWikiKeywordPage, { generateMetadata } from './new-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaWikiKeywordPage />;
}
