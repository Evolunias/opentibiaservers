import WithReviewsNtoStarRulesKeywordPage, { generateMetadata } from './with-reviews-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarRulesKeywordPage />;
}
