import WithReviewsSeasonPolandKeywordPage, { generateMetadata } from './with-reviews-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonPolandKeywordPage />;
}
