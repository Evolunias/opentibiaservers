import WithReviewsRealeraClientKeywordPage, { generateMetadata } from './with-reviews-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraClientKeywordPage />;
}
