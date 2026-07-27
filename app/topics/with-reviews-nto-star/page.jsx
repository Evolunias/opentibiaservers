import WithReviewsNtoStarKeywordPage, { generateMetadata } from './with-reviews-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarKeywordPage />;
}
