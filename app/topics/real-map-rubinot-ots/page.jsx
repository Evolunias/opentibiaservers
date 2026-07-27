import RealMapRubinotOtsKeywordPage, { generateMetadata } from './real-map-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotOtsKeywordPage />;
}
