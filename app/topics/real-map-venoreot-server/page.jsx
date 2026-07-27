import RealMapVenoreotServerKeywordPage, { generateMetadata } from './real-map-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotServerKeywordPage />;
}
