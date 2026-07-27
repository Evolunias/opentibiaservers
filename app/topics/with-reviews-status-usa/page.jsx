import WithReviewsStatusUsaKeywordPage, { generateMetadata } from './with-reviews-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusUsaKeywordPage />;
}
