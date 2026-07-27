import WithReviewsClientSwedenKeywordPage, { generateMetadata } from './with-reviews-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientSwedenKeywordPage />;
}
