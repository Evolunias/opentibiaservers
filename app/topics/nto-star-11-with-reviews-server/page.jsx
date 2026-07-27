import NtoStar11WithReviewsServerKeywordPage, { generateMetadata } from './nto-star-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar11WithReviewsServerKeywordPage />;
}
