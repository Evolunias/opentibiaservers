import WithReviewsRealestaClientKeywordPage, { generateMetadata } from './with-reviews-realesta-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaClientKeywordPage />;
}
