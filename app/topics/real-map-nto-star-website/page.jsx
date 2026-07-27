import RealMapNtoStarWebsiteKeywordPage, { generateMetadata } from './real-map-nto-star-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarWebsiteKeywordPage />;
}
