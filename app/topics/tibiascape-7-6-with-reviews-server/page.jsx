import Tibiascape76WithReviewsServerKeywordPage, { generateMetadata } from './tibiascape-7-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape76WithReviewsServerKeywordPage />;
}
