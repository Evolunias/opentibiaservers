import Kasteria81WithReviewsServerKeywordPage, { generateMetadata } from './kasteria-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria81WithReviewsServerKeywordPage />;
}
