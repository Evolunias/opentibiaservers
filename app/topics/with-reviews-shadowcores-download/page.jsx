import WithReviewsShadowcoresDownloadKeywordPage, { generateMetadata } from './with-reviews-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresDownloadKeywordPage />;
}
