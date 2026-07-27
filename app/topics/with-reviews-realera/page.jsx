import WithReviewsRealeraKeywordPage, { generateMetadata } from './with-reviews-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraKeywordPage />;
}
