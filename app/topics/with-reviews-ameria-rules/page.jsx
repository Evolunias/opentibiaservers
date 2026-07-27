import WithReviewsAmeriaRulesKeywordPage, { generateMetadata } from './with-reviews-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaRulesKeywordPage />;
}
