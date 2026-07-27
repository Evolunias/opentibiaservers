import WithReviewsSeasonUkKeywordPage, { generateMetadata } from './with-reviews-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonUkKeywordPage />;
}
