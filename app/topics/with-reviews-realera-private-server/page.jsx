import WithReviewsRealeraPrivateServerKeywordPage, { generateMetadata } from './with-reviews-realera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraPrivateServerKeywordPage />;
}
