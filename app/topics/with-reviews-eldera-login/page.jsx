import WithReviewsElderaLoginKeywordPage, { generateMetadata } from './with-reviews-eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaLoginKeywordPage />;
}
