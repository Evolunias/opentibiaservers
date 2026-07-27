import RealMapTibijkaWebsiteKeywordPage, { generateMetadata } from './real-map-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaWebsiteKeywordPage />;
}
