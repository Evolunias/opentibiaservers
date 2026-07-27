import RealMapRubinotOtServerKeywordPage, { generateMetadata } from './real-map-rubinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotOtServerKeywordPage />;
}
