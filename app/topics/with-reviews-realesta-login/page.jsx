import WithReviewsRealestaLoginKeywordPage, { generateMetadata } from './with-reviews-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaLoginKeywordPage />;
}
