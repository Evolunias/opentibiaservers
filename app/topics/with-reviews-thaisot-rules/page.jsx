import WithReviewsThaisotRulesKeywordPage, { generateMetadata } from './with-reviews-thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotRulesKeywordPage />;
}
