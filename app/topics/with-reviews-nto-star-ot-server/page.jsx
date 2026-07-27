import WithReviewsNtoStarOtServerKeywordPage, { generateMetadata } from './with-reviews-nto-star-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarOtServerKeywordPage />;
}
