import HighrateVenoreotWikiKeywordPage, { generateMetadata } from './highrate-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotWikiKeywordPage />;
}
