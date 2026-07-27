import RealMapThorniaTibiaKeywordPage, { generateMetadata } from './real-map-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaTibiaKeywordPage />;
}
