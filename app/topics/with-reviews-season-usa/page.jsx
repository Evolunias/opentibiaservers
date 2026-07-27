import WithReviewsSeasonUsaKeywordPage, { generateMetadata } from './with-reviews-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonUsaKeywordPage />;
}
