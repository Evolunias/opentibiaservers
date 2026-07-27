import TopVenoreotWikiKeywordPage, { generateMetadata } from './top-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotWikiKeywordPage />;
}
