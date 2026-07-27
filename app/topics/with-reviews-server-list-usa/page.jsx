import WithReviewsServerListUsaKeywordPage, { generateMetadata } from './with-reviews-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListUsaKeywordPage />;
}
