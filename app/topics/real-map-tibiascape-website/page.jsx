import RealMapTibiascapeWebsiteKeywordPage, { generateMetadata } from './real-map-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeWebsiteKeywordPage />;
}
