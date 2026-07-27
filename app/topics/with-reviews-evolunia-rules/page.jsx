import WithReviewsEvoluniaRulesKeywordPage, { generateMetadata } from './with-reviews-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoluniaRulesKeywordPage />;
}
