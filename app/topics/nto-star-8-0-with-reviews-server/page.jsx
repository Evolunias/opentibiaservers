import NtoStar80WithReviewsServerKeywordPage, { generateMetadata } from './nto-star-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar80WithReviewsServerKeywordPage />;
}
