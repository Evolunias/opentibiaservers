import RealMapTibiaraClientKeywordPage, { generateMetadata } from './real-map-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraClientKeywordPage />;
}
