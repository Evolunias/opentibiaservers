import WithReviewsRealeraServerKeywordPage, { generateMetadata } from './with-reviews-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraServerKeywordPage />;
}
