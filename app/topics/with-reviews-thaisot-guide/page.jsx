import WithReviewsThaisotGuideKeywordPage, { generateMetadata } from './with-reviews-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotGuideKeywordPage />;
}
