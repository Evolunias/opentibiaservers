import WithReviewsServerListArgentinaKeywordPage, { generateMetadata } from './with-reviews-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListArgentinaKeywordPage />;
}
