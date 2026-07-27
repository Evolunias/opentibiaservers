import WithReviewsNtoStarLoginKeywordPage, { generateMetadata } from './with-reviews-nto-star-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarLoginKeywordPage />;
}
