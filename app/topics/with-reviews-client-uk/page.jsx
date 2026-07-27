import WithReviewsClientUkKeywordPage, { generateMetadata } from './with-reviews-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientUkKeywordPage />;
}
