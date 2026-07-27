import TopOlderaWikiKeywordPage, { generateMetadata } from './top-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaWikiKeywordPage />;
}
