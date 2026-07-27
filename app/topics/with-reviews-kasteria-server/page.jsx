import WithReviewsKasteriaServerKeywordPage, { generateMetadata } from './with-reviews-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaServerKeywordPage />;
}
