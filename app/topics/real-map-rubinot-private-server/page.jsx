import RealMapRubinotPrivateServerKeywordPage, { generateMetadata } from './real-map-rubinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotPrivateServerKeywordPage />;
}
