import TopRealeraWikiKeywordPage, { generateMetadata } from './top-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraWikiKeywordPage />;
}
