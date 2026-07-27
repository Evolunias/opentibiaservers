import Tibiascape11WithReviewsServerKeywordPage, { generateMetadata } from './tibiascape-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11WithReviewsServerKeywordPage />;
}
