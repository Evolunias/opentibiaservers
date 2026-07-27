import RealMapOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './real-map-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessOpenTibiaKeywordPage />;
}
