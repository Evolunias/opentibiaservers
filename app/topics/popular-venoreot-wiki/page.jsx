import PopularVenoreotWikiKeywordPage, { generateMetadata } from './popular-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotWikiKeywordPage />;
}
