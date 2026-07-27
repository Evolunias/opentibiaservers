import WithReviewsShadowcoresOtServerKeywordPage, { generateMetadata } from './with-reviews-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresOtServerKeywordPage />;
}
