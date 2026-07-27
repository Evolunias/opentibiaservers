import WithReviewsShadowcoresPrivateServerKeywordPage, { generateMetadata } from './with-reviews-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresPrivateServerKeywordPage />;
}
