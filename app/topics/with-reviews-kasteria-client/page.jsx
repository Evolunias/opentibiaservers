import WithReviewsKasteriaClientKeywordPage, { generateMetadata } from './with-reviews-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaClientKeywordPage />;
}
