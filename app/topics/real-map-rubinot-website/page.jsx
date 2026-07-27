import RealMapRubinotWebsiteKeywordPage, { generateMetadata } from './real-map-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotWebsiteKeywordPage />;
}
