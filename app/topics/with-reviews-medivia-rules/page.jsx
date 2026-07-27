import WithReviewsMediviaRulesKeywordPage, { generateMetadata } from './with-reviews-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaRulesKeywordPage />;
}
