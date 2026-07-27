import RealMapTibijkaClientKeywordPage, { generateMetadata } from './real-map-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaClientKeywordPage />;
}
