import Tibia81WithReviewsServerListKeywordPage, { generateMetadata } from './tibia-8-1-with-reviews-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithReviewsServerListKeywordPage />;
}
