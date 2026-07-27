import WithReviewsServerListGermanyKeywordPage, { generateMetadata } from './with-reviews-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListGermanyKeywordPage />;
}
