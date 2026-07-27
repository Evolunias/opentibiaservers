import WithReviewsSeasonEuropeKeywordPage, { generateMetadata } from './with-reviews-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonEuropeKeywordPage />;
}
