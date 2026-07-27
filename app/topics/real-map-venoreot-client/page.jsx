import RealMapVenoreotClientKeywordPage, { generateMetadata } from './real-map-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotClientKeywordPage />;
}
