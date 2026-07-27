import RealMapRubinotGuideKeywordPage, { generateMetadata } from './real-map-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotGuideKeywordPage />;
}
