import RealMapOtmadnessOtKeywordPage, { generateMetadata } from './real-map-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessOtKeywordPage />;
}
