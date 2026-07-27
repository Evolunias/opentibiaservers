import Medivia71WithReviewsServerKeywordPage, { generateMetadata } from './medivia-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia71WithReviewsServerKeywordPage />;
}
