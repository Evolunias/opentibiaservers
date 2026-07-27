import WithReviewsLumineraRulesKeywordPage, { generateMetadata } from './with-reviews-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraRulesKeywordPage />;
}
