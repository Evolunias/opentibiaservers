import WithReviewsOxygenotRulesKeywordPage, { generateMetadata } from './with-reviews-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotRulesKeywordPage />;
}
