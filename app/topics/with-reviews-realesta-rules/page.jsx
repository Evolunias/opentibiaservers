import WithReviewsRealestaRulesKeywordPage, { generateMetadata } from './with-reviews-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaRulesKeywordPage />;
}
