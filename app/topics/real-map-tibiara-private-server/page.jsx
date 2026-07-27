import RealMapTibiaraPrivateServerKeywordPage, { generateMetadata } from './real-map-tibiara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraPrivateServerKeywordPage />;
}
