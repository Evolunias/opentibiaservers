import BestCanobWikiKeywordPage, { generateMetadata } from './best-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobWikiKeywordPage />;
}
