import RealMapBlazeraOpenTibiaKeywordPage, { generateMetadata } from './real-map-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraOpenTibiaKeywordPage />;
}
