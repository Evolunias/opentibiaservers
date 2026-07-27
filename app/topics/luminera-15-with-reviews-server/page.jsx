import Luminera15WithReviewsServerKeywordPage, { generateMetadata } from './luminera-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15WithReviewsServerKeywordPage />;
}
