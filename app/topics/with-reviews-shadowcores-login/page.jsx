import WithReviewsShadowcoresLoginKeywordPage, { generateMetadata } from './with-reviews-shadowcores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresLoginKeywordPage />;
}
