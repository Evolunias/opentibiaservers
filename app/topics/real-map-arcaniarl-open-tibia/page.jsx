import RealMapArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './real-map-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlOpenTibiaKeywordPage />;
}
