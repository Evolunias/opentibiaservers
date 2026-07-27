import RealMapTibiaraServerKeywordPage, { generateMetadata } from './real-map-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraServerKeywordPage />;
}
