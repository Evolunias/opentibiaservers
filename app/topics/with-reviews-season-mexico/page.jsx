import WithReviewsSeasonMexicoKeywordPage, { generateMetadata } from './with-reviews-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSeasonMexicoKeywordPage />;
}
