import WithReviewsKasteriaPrivateServerKeywordPage, { generateMetadata } from './with-reviews-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaPrivateServerKeywordPage />;
}
