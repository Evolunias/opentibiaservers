import WithReviewsSeasonBrazilKeywordPage, { generateMetadata } from './with-reviews-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonBrazilKeywordPage />;
}
