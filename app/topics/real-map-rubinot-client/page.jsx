import RealMapRubinotClientKeywordPage, { generateMetadata } from './real-map-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotClientKeywordPage />;
}
