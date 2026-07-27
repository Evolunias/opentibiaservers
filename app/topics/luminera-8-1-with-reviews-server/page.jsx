import Luminera81WithReviewsServerKeywordPage, { generateMetadata } from './luminera-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81WithReviewsServerKeywordPage />;
}
