import WithReviewsRealestaServerKeywordPage, { generateMetadata } from './with-reviews-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaServerKeywordPage />;
}
