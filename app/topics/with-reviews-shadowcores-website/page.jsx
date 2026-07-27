import WithReviewsShadowcoresWebsiteKeywordPage, { generateMetadata } from './with-reviews-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresWebsiteKeywordPage />;
}
