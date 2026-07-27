import RealMapArcaniarlTibiaKeywordPage, { generateMetadata } from './real-map-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlTibiaKeywordPage />;
}
