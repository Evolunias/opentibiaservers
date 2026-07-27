import WithReviewsStatusPolandKeywordPage, { generateMetadata } from './with-reviews-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusPolandKeywordPage />;
}
