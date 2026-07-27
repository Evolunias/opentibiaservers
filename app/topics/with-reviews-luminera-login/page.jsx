import WithReviewsLumineraLoginKeywordPage, { generateMetadata } from './with-reviews-luminera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraLoginKeywordPage />;
}
