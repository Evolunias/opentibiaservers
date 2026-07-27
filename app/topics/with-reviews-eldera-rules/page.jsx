import WithReviewsElderaRulesKeywordPage, { generateMetadata } from './with-reviews-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaRulesKeywordPage />;
}
