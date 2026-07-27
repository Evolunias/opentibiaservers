import Tibijka15WithReviewsServerKeywordPage, { generateMetadata } from './tibijka-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15WithReviewsServerKeywordPage />;
}
