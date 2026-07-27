import Tibia81WithReviewsServersKeywordPage, { generateMetadata } from './tibia-8-1-with-reviews-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithReviewsServersKeywordPage />;
}
