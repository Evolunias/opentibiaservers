import RealMapEvoluniaTibiaKeywordPage, { generateMetadata } from './real-map-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoluniaTibiaKeywordPage />;
}
