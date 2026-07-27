import WithReviewsElderaHighscoresKeywordPage, { generateMetadata } from './with-reviews-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaHighscoresKeywordPage />;
}
