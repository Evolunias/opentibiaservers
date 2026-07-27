import RealMapGuideGermanyKeywordPage, { generateMetadata } from './real-map-guide-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideGermanyKeywordPage />;
}
