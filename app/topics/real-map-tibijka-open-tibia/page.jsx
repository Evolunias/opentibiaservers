import RealMapTibijkaOpenTibiaKeywordPage, { generateMetadata } from './real-map-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaOpenTibiaKeywordPage />;
}
