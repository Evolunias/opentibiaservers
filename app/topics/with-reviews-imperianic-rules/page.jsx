import WithReviewsImperianicRulesKeywordPage, { generateMetadata } from './with-reviews-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicRulesKeywordPage />;
}
