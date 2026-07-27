import AlasteraWithReviewsServerSwedenKeywordPage, { generateMetadata } from './alastera-with-reviews-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraWithReviewsServerSwedenKeywordPage />;
}
