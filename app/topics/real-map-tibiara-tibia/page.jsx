import RealMapTibiaraTibiaKeywordPage, { generateMetadata } from './real-map-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraTibiaKeywordPage />;
}
