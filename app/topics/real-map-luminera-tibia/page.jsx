import RealMapLumineraTibiaKeywordPage, { generateMetadata } from './real-map-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraTibiaKeywordPage />;
}
