import RealMapTibiaraWebsiteKeywordPage, { generateMetadata } from './real-map-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraWebsiteKeywordPage />;
}
