import WithReviewsClientCanadaKeywordPage, { generateMetadata } from './with-reviews-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientCanadaKeywordPage />;
}
