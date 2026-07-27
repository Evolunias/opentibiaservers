import RealMapGuideSwedenKeywordPage, { generateMetadata } from './real-map-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGuideSwedenKeywordPage />;
}
