import WithReviewsStatusCanadaKeywordPage, { generateMetadata } from './with-reviews-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsStatusCanadaKeywordPage />;
}
