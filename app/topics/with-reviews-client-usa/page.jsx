import WithReviewsClientUsaKeywordPage, { generateMetadata } from './with-reviews-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClientUsaKeywordPage />;
}
