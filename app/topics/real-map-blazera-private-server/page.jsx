import RealMapBlazeraPrivateServerKeywordPage, { generateMetadata } from './real-map-blazera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraPrivateServerKeywordPage />;
}
