import WithReviewsRealeraLoginKeywordPage, { generateMetadata } from './with-reviews-realera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealeraLoginKeywordPage />;
}
