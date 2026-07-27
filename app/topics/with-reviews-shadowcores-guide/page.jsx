import WithReviewsShadowcoresGuideKeywordPage, { generateMetadata } from './with-reviews-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresGuideKeywordPage />;
}
