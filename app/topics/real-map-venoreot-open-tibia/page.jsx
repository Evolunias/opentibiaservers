import RealMapVenoreotOpenTibiaKeywordPage, { generateMetadata } from './real-map-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapVenoreotOpenTibiaKeywordPage />;
}
