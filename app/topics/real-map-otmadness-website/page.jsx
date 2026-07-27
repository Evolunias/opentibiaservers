import RealMapOtmadnessWebsiteKeywordPage, { generateMetadata } from './real-map-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessWebsiteKeywordPage />;
}
