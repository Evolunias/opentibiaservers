import RealMapImperianicWebsiteKeywordPage, { generateMetadata } from './real-map-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicWebsiteKeywordPage />;
}
