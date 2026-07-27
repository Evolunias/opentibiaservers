import Tibiascape15WithReviewsServerKeywordPage, { generateMetadata } from './tibiascape-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15WithReviewsServerKeywordPage />;
}
