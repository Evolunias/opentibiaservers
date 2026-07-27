import Tibijka96WithReviewsServerKeywordPage, { generateMetadata } from './tibijka-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka96WithReviewsServerKeywordPage />;
}
