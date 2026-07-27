import RealMapVenoreotGuideKeywordPage, { generateMetadata } from './real-map-venoreot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotGuideKeywordPage />;
}
