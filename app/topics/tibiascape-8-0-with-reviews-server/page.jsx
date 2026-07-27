import Tibiascape80WithReviewsServerKeywordPage, { generateMetadata } from './tibiascape-8-0-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80WithReviewsServerKeywordPage />;
}
