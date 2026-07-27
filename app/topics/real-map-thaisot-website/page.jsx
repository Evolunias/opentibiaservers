import RealMapThaisotWebsiteKeywordPage, { generateMetadata } from './real-map-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotWebsiteKeywordPage />;
}
