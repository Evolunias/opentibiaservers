import WithReviewsGuideEuropeKeywordPage, { generateMetadata } from './with-reviews-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGuideEuropeKeywordPage />;
}
