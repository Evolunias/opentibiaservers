import RealMapVenoreotWebsiteKeywordPage, { generateMetadata } from './real-map-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotWebsiteKeywordPage />;
}
