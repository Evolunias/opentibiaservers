import WithReviewsMiracleRulesKeywordPage, { generateMetadata } from './with-reviews-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleRulesKeywordPage />;
}
