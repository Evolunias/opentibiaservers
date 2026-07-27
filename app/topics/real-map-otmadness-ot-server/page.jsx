import RealMapOtmadnessOtServerKeywordPage, { generateMetadata } from './real-map-otmadness-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessOtServerKeywordPage />;
}
