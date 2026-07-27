import ShadowcoresWithReviewsServerSwedenKeywordPage, { generateMetadata } from './shadowcores-with-reviews-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresWithReviewsServerSwedenKeywordPage />;
}
