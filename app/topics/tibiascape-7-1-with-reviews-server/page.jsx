import Tibiascape71WithReviewsServerKeywordPage, { generateMetadata } from './tibiascape-7-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape71WithReviewsServerKeywordPage />;
}
