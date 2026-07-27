import Tibiascape81WithReviewsServerKeywordPage, { generateMetadata } from './tibiascape-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape81WithReviewsServerKeywordPage />;
}
