import NtoStar84WithReviewsServerKeywordPage, { generateMetadata } from './nto-star-8-4-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar84WithReviewsServerKeywordPage />;
}
