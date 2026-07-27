import WithReviewsNostaltherRulesKeywordPage, { generateMetadata } from './with-reviews-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherRulesKeywordPage />;
}
