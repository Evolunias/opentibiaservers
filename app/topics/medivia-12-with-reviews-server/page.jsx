import Medivia12WithReviewsServerKeywordPage, { generateMetadata } from './medivia-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12WithReviewsServerKeywordPage />;
}
