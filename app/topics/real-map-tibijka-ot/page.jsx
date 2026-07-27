import RealMapTibijkaOtKeywordPage, { generateMetadata } from './real-map-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaOtKeywordPage />;
}
