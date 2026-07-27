import WithReviewsMidhemRulesKeywordPage, { generateMetadata } from './with-reviews-midhem-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemRulesKeywordPage />;
}
