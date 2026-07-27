import RealMapVenoreotOtKeywordPage, { generateMetadata } from './real-map-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotOtKeywordPage />;
}
