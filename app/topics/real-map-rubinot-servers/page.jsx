import RealMapRubinotServersKeywordPage, { generateMetadata } from './real-map-rubinot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotServersKeywordPage />;
}
