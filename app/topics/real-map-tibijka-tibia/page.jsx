import RealMapTibijkaTibiaKeywordPage, { generateMetadata } from './real-map-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaTibiaKeywordPage />;
}
