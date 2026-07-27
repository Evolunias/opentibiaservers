import WithReviewsServerListEuropeKeywordPage, { generateMetadata } from './with-reviews-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServerListEuropeKeywordPage />;
}
