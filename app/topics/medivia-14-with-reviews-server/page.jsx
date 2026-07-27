import Medivia14WithReviewsServerKeywordPage, { generateMetadata } from './medivia-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14WithReviewsServerKeywordPage />;
}
