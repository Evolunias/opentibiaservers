import NtoStar13WithReviewsServerKeywordPage, { generateMetadata } from './nto-star-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13WithReviewsServerKeywordPage />;
}
