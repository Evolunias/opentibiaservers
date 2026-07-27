import Tibijka14WithReviewsServerKeywordPage, { generateMetadata } from './tibijka-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14WithReviewsServerKeywordPage />;
}
