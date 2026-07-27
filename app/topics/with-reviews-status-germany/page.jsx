import WithReviewsStatusGermanyKeywordPage, { generateMetadata } from './with-reviews-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusGermanyKeywordPage />;
}
