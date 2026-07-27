import RealMapTibijkaOtsKeywordPage, { generateMetadata } from './real-map-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaOtsKeywordPage />;
}
