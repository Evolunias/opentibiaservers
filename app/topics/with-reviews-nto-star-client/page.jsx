import WithReviewsNtoStarClientKeywordPage, { generateMetadata } from './with-reviews-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarClientKeywordPage />;
}
