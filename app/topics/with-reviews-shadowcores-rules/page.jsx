import WithReviewsShadowcoresRulesKeywordPage, { generateMetadata } from './with-reviews-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresRulesKeywordPage />;
}
