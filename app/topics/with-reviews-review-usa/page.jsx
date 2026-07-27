import WithReviewsReviewUsaKeywordPage, { generateMetadata } from './with-reviews-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsReviewUsaKeywordPage />;
}
