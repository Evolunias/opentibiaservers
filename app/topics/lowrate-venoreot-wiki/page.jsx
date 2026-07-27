import LowrateVenoreotWikiKeywordPage, { generateMetadata } from './lowrate-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotWikiKeywordPage />;
}
