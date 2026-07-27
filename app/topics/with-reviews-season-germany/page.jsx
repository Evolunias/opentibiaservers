import WithReviewsSeasonGermanyKeywordPage, { generateMetadata } from './with-reviews-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonGermanyKeywordPage />;
}
