import RealMapEvoleraTibiaKeywordPage, { generateMetadata } from './real-map-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoleraTibiaKeywordPage />;
}
