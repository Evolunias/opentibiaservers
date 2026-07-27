import RealMapRubinotKeywordPage, { generateMetadata } from './real-map-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotKeywordPage />;
}
