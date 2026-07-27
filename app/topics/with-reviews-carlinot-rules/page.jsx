import WithReviewsCarlinotRulesKeywordPage, { generateMetadata } from './with-reviews-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotRulesKeywordPage />;
}
