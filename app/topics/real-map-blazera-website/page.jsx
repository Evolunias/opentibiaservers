import RealMapBlazeraWebsiteKeywordPage, { generateMetadata } from './real-map-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraWebsiteKeywordPage />;
}
