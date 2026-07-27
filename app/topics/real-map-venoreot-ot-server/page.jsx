import RealMapVenoreotOtServerKeywordPage, { generateMetadata } from './real-map-venoreot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotOtServerKeywordPage />;
}
