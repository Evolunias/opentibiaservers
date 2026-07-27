import WithReviewsRealestaKeywordPage, { generateMetadata } from './with-reviews-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaKeywordPage />;
}
