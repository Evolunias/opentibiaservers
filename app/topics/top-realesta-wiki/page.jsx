import TopRealestaWikiKeywordPage, { generateMetadata } from './top-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaWikiKeywordPage />;
}
