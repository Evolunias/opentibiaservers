import WithReviewsAmeriaLoginKeywordPage, { generateMetadata } from './with-reviews-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaLoginKeywordPage />;
}
