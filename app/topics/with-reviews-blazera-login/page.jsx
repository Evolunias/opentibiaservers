import WithReviewsBlazeraLoginKeywordPage, { generateMetadata } from './with-reviews-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraLoginKeywordPage />;
}
