import RealMapOxygenotClientKeywordPage, { generateMetadata } from './real-map-oxygenot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOxygenotClientKeywordPage />;
}
