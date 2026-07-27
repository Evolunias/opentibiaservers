import WithReviewsReviewCanadaKeywordPage, { generateMetadata } from './with-reviews-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsReviewCanadaKeywordPage />;
}
