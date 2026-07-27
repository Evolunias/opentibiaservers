import WithReviewsClassicusRulesKeywordPage, { generateMetadata } from './with-reviews-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusRulesKeywordPage />;
}
