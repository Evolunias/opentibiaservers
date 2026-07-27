import RealMapOtmadnessOtsKeywordPage, { generateMetadata } from './real-map-otmadness-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessOtsKeywordPage />;
}
