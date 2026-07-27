import RealMapVenoreotTibiaKeywordPage, { generateMetadata } from './real-map-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotTibiaKeywordPage />;
}
