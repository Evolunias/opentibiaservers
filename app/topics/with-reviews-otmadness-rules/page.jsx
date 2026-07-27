import WithReviewsOtmadnessRulesKeywordPage, { generateMetadata } from './with-reviews-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessRulesKeywordPage />;
}
