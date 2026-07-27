import WithReviewsShadowcoresWikiKeywordPage, { generateMetadata } from './with-reviews-shadowcores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresWikiKeywordPage />;
}
