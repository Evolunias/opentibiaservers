import WithReviewsOlderaLoginKeywordPage, { generateMetadata } from './with-reviews-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaLoginKeywordPage />;
}
