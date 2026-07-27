import HighrateOxygenotWikiKeywordPage, { generateMetadata } from './highrate-oxygenot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotWikiKeywordPage />;
}
