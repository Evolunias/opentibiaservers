import RealMapOlderaTibiaKeywordPage, { generateMetadata } from './real-map-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaTibiaKeywordPage />;
}
