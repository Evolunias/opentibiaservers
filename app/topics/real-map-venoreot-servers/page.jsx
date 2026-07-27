import RealMapVenoreotServersKeywordPage, { generateMetadata } from './real-map-venoreot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotServersKeywordPage />;
}
