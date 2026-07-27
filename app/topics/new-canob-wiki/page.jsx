import NewCanobWikiKeywordPage, { generateMetadata } from './new-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobWikiKeywordPage />;
}
