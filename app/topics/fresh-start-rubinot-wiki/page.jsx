import FreshStartRubinotWikiKeywordPage, { generateMetadata } from './fresh-start-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotWikiKeywordPage />;
}
