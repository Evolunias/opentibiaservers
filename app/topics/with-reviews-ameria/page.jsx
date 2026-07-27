import WithReviewsAmeriaKeywordPage, { generateMetadata } from './with-reviews-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaKeywordPage />;
}
