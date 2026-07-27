import RealMapTibijkaKeywordPage, { generateMetadata } from './real-map-tibijka';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaKeywordPage />;
}
