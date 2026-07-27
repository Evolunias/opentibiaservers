import WithReviewsElderaPrivateServerKeywordPage, { generateMetadata } from './with-reviews-eldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaPrivateServerKeywordPage />;
}
