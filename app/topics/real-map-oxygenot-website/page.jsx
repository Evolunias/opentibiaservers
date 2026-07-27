import RealMapOxygenotWebsiteKeywordPage, { generateMetadata } from './real-map-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOxygenotWebsiteKeywordPage />;
}
