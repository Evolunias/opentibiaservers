import WithReviewsShadowcoresKeywordPage, { generateMetadata } from './with-reviews-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresKeywordPage />;
}
