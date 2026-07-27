import NewOxygenotWikiKeywordPage, { generateMetadata } from './new-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotWikiKeywordPage />;
}
