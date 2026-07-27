import RealMapOtmadnessClientKeywordPage, { generateMetadata } from './real-map-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessClientKeywordPage />;
}
