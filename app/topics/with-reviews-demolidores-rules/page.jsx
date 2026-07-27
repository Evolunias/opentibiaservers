import WithReviewsDemolidoresRulesKeywordPage, { generateMetadata } from './with-reviews-demolidores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDemolidoresRulesKeywordPage />;
}
