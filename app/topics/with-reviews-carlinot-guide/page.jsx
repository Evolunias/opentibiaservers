import WithReviewsCarlinotGuideKeywordPage, { generateMetadata } from './with-reviews-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotGuideKeywordPage />;
}
