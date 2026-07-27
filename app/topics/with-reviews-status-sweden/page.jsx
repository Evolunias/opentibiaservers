import WithReviewsStatusSwedenKeywordPage, { generateMetadata } from './with-reviews-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusSwedenKeywordPage />;
}
