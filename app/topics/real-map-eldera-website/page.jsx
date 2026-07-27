import RealMapElderaWebsiteKeywordPage, { generateMetadata } from './real-map-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaWebsiteKeywordPage />;
}
