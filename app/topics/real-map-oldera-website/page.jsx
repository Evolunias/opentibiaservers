import RealMapOlderaWebsiteKeywordPage, { generateMetadata } from './real-map-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOlderaWebsiteKeywordPage />;
}
