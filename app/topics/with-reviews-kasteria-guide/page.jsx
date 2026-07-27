import WithReviewsKasteriaGuideKeywordPage, { generateMetadata } from './with-reviews-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaGuideKeywordPage />;
}
