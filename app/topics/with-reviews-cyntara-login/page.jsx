import WithReviewsCyntaraLoginKeywordPage, { generateMetadata } from './with-reviews-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraLoginKeywordPage />;
}
