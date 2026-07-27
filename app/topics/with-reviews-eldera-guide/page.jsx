import WithReviewsElderaGuideKeywordPage, { generateMetadata } from './with-reviews-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaGuideKeywordPage />;
}
