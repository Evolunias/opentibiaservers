import PopularRubinotWikiKeywordPage, { generateMetadata } from './popular-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotWikiKeywordPage />;
}
