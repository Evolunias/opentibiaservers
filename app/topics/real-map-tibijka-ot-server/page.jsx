import RealMapTibijkaOtServerKeywordPage, { generateMetadata } from './real-map-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaOtServerKeywordPage />;
}
