import WithReviewsClientGermanyKeywordPage, { generateMetadata } from './with-reviews-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientGermanyKeywordPage />;
}
