import Tibijka13WithReviewsServerKeywordPage, { generateMetadata } from './tibijka-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13WithReviewsServerKeywordPage />;
}
