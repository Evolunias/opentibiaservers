import WithReviewsOlderaRulesKeywordPage, { generateMetadata } from './with-reviews-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaRulesKeywordPage />;
}
