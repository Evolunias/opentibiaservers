import WithReviewsStatusArgentinaKeywordPage, { generateMetadata } from './with-reviews-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusArgentinaKeywordPage />;
}
