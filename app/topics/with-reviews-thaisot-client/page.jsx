import WithReviewsThaisotClientKeywordPage, { generateMetadata } from './with-reviews-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotClientKeywordPage />;
}
