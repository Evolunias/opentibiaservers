import WithReviewsClientEuropeKeywordPage, { generateMetadata } from './with-reviews-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientEuropeKeywordPage />;
}
