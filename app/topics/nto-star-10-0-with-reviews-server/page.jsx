import NtoStar100WithReviewsServerKeywordPage, { generateMetadata } from './nto-star-10-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar100WithReviewsServerKeywordPage />;
}
