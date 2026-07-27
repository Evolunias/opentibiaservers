import WithReviewsStatusUkKeywordPage, { generateMetadata } from './with-reviews-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusUkKeywordPage />;
}
