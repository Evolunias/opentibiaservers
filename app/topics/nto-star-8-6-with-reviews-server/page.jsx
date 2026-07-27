import NtoStar86WithReviewsServerKeywordPage, { generateMetadata } from './nto-star-8-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar86WithReviewsServerKeywordPage />;
}
