import WithReviewsCarlinotHighscoresKeywordPage, { generateMetadata } from './with-reviews-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotHighscoresKeywordPage />;
}
