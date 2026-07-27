import HighrateCarlinotWikiKeywordPage, { generateMetadata } from './highrate-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotWikiKeywordPage />;
}
