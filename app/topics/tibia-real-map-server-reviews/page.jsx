import TibiaRealMapServerReviewsKeywordPage, { generateMetadata } from './tibia-real-map-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerReviewsKeywordPage />;
}
