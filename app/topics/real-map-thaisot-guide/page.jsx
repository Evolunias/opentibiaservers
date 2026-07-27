import RealMapThaisotGuideKeywordPage, { generateMetadata } from './real-map-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotGuideKeywordPage />;
}
