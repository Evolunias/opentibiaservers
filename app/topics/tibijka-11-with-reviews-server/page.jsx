import Tibijka11WithReviewsServerKeywordPage, { generateMetadata } from './tibijka-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11WithReviewsServerKeywordPage />;
}
