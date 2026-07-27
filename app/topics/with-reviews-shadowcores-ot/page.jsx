import WithReviewsShadowcoresOtKeywordPage, { generateMetadata } from './with-reviews-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresOtKeywordPage />;
}
