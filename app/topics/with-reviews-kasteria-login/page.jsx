import WithReviewsKasteriaLoginKeywordPage, { generateMetadata } from './with-reviews-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaLoginKeywordPage />;
}
