import RealMapMediviaTibiaKeywordPage, { generateMetadata } from './real-map-medivia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaTibiaKeywordPage />;
}
