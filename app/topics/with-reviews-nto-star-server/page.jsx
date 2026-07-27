import WithReviewsNtoStarServerKeywordPage, { generateMetadata } from './with-reviews-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarServerKeywordPage />;
}
