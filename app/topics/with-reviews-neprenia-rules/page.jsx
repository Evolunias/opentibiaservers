import WithReviewsNepreniaRulesKeywordPage, { generateMetadata } from './with-reviews-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaRulesKeywordPage />;
}
