import TopRubinotWikiKeywordPage, { generateMetadata } from './top-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotWikiKeywordPage />;
}
