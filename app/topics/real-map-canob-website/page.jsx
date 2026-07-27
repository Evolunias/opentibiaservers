import RealMapCanobWebsiteKeywordPage, { generateMetadata } from './real-map-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobWebsiteKeywordPage />;
}
