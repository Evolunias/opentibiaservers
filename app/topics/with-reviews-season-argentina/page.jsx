import WithReviewsSeasonArgentinaKeywordPage, { generateMetadata } from './with-reviews-season-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonArgentinaKeywordPage />;
}
