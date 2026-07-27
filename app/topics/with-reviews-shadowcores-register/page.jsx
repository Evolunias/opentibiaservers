import WithReviewsShadowcoresRegisterKeywordPage, { generateMetadata } from './with-reviews-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresRegisterKeywordPage />;
}
