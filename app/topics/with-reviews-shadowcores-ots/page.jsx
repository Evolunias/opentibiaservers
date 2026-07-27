import WithReviewsShadowcoresOtsKeywordPage, { generateMetadata } from './with-reviews-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresOtsKeywordPage />;
}
