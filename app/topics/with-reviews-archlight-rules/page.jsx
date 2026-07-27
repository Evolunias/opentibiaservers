import WithReviewsArchlightRulesKeywordPage, { generateMetadata } from './with-reviews-archlight-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightRulesKeywordPage />;
}
