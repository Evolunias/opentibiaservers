import RealMapCanobTibiaKeywordPage, { generateMetadata } from './real-map-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobTibiaKeywordPage />;
}
