import OtmadnessRealMapServerEuropeKeywordPage, { generateMetadata } from './otmadness-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessRealMapServerEuropeKeywordPage />;
}
