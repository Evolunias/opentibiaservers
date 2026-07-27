import RealMapVenoreotOtsKeywordPage, { generateMetadata } from './real-map-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotOtsKeywordPage />;
}
