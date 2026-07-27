import WithReviewsClientBrazilKeywordPage, { generateMetadata } from './with-reviews-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientBrazilKeywordPage />;
}
