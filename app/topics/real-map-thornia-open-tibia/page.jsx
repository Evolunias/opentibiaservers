import RealMapThorniaOpenTibiaKeywordPage, { generateMetadata } from './real-map-thornia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaOpenTibiaKeywordPage />;
}
