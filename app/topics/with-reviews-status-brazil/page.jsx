import WithReviewsStatusBrazilKeywordPage, { generateMetadata } from './with-reviews-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusBrazilKeywordPage />;
}
