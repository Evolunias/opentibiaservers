import RealMapKasteriaTibiaKeywordPage, { generateMetadata } from './real-map-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaTibiaKeywordPage />;
}
