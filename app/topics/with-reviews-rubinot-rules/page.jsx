import WithReviewsRubinotRulesKeywordPage, { generateMetadata } from './with-reviews-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotRulesKeywordPage />;
}
