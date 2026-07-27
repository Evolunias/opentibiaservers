import WithReviewsCyntaraRulesKeywordPage, { generateMetadata } from './with-reviews-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraRulesKeywordPage />;
}
