import BestOxygenotWikiKeywordPage, { generateMetadata } from './best-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotWikiKeywordPage />;
}
