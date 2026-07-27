import RealMapCanobOpenTibiaKeywordPage, { generateMetadata } from './real-map-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobOpenTibiaKeywordPage />;
}
