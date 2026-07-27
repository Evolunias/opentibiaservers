import RealMapRubinotOtKeywordPage, { generateMetadata } from './real-map-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotOtKeywordPage />;
}
