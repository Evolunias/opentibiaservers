import RealMapVenoreotWikiKeywordPage, { generateMetadata } from './real-map-venoreot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotWikiKeywordPage />;
}
