import RealMapOtmadnessTibiaKeywordPage, { generateMetadata } from './real-map-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessTibiaKeywordPage />;
}
