import RealMapOtmadnessGuideKeywordPage, { generateMetadata } from './real-map-otmadness-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessGuideKeywordPage />;
}
