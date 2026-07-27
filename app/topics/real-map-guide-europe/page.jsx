import RealMapGuideEuropeKeywordPage, { generateMetadata } from './real-map-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideEuropeKeywordPage />;
}
