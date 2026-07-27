import FreshStartCanobWikiKeywordPage, { generateMetadata } from './fresh-start-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobWikiKeywordPage />;
}
