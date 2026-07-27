import WithReviewsServerListSwedenKeywordPage, { generateMetadata } from './with-reviews-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListSwedenKeywordPage />;
}
