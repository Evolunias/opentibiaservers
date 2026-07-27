import WithReviewsNepreniaPrivateServerKeywordPage, { generateMetadata } from './with-reviews-neprenia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaPrivateServerKeywordPage />;
}
