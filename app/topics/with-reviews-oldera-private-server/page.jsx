import WithReviewsOlderaPrivateServerKeywordPage, { generateMetadata } from './with-reviews-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaPrivateServerKeywordPage />;
}
