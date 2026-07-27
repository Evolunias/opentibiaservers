import NtoStar96WithReviewsServerKeywordPage, { generateMetadata } from './nto-star-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar96WithReviewsServerKeywordPage />;
}
