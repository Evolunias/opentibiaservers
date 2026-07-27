import HighrateRubinotWikiKeywordPage, { generateMetadata } from './highrate-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotWikiKeywordPage />;
}
