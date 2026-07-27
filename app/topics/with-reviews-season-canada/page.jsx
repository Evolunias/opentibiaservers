import WithReviewsSeasonCanadaKeywordPage, { generateMetadata } from './with-reviews-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonCanadaKeywordPage />;
}
