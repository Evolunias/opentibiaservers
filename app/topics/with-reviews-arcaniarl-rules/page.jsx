import WithReviewsArcaniarlRulesKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlRulesKeywordPage />;
}
