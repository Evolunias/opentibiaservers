import Blazera81WithReviewsServerKeywordPage, { generateMetadata } from './blazera-8-1-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera81WithReviewsServerKeywordPage />;
}
