import RealMapGuideArgentinaKeywordPage, { generateMetadata } from './real-map-guide-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideArgentinaKeywordPage />;
}
