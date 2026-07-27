import Medivia100WithReviewsServerKeywordPage, { generateMetadata } from './medivia-10-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia100WithReviewsServerKeywordPage />;
}
