import WithReviewsOlderaGuideKeywordPage, { generateMetadata } from './with-reviews-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaGuideKeywordPage />;
}
