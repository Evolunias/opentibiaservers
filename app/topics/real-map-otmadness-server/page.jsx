import RealMapOtmadnessServerKeywordPage, { generateMetadata } from './real-map-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessServerKeywordPage />;
}
