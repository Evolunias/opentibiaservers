import RealMapRubinotServerKeywordPage, { generateMetadata } from './real-map-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotServerKeywordPage />;
}
