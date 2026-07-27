import BestRubinotWikiKeywordPage, { generateMetadata } from './best-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotWikiKeywordPage />;
}
