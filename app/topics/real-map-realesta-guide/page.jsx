import RealMapRealestaGuideKeywordPage, { generateMetadata } from './real-map-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealestaGuideKeywordPage />;
}
