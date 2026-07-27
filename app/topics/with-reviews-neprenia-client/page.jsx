import WithReviewsNepreniaClientKeywordPage, { generateMetadata } from './with-reviews-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaClientKeywordPage />;
}
