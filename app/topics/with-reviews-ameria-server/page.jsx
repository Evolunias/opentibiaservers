import WithReviewsAmeriaServerKeywordPage, { generateMetadata } from './with-reviews-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaServerKeywordPage />;
}
