import WithReviewsShadowcoresClientKeywordPage, { generateMetadata } from './with-reviews-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresClientKeywordPage />;
}
