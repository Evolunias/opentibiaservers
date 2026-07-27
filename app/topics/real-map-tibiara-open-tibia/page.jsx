import RealMapTibiaraOpenTibiaKeywordPage, { generateMetadata } from './real-map-tibiara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraOpenTibiaKeywordPage />;
}
