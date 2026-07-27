import WithReviewsGuideUsaKeywordPage, { generateMetadata } from './with-reviews-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGuideUsaKeywordPage />;
}
