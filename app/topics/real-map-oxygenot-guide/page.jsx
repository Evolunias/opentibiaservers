import RealMapOxygenotGuideKeywordPage, { generateMetadata } from './real-map-oxygenot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOxygenotGuideKeywordPage />;
}
