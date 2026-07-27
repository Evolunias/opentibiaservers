import WithReviewsSerenityRulesKeywordPage, { generateMetadata } from './with-reviews-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityRulesKeywordPage />;
}
