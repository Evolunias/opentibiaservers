import RealMapLumineraWebsiteKeywordPage, { generateMetadata } from './real-map-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraWebsiteKeywordPage />;
}
