import WithReviewsSeasonSwedenKeywordPage, { generateMetadata } from './with-reviews-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonSwedenKeywordPage />;
}
