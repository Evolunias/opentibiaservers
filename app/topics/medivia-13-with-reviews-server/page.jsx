import Medivia13WithReviewsServerKeywordPage, { generateMetadata } from './medivia-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13WithReviewsServerKeywordPage />;
}
