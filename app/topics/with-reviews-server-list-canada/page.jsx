import WithReviewsServerListCanadaKeywordPage, { generateMetadata } from './with-reviews-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListCanadaKeywordPage />;
}
