import FreshStartOxygenotWikiKeywordPage, { generateMetadata } from './fresh-start-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOxygenotWikiKeywordPage />;
}
