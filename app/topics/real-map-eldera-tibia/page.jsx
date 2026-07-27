import RealMapElderaTibiaKeywordPage, { generateMetadata } from './real-map-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaTibiaKeywordPage />;
}
