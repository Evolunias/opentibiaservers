import WithReviewsSeasonFranceKeywordPage, { generateMetadata } from './with-reviews-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonFranceKeywordPage />;
}
