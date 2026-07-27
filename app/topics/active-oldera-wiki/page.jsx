import ActiveOlderaWikiKeywordPage, { generateMetadata } from './active-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaWikiKeywordPage />;
}
