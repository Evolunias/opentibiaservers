import WithReviewsOlderaHighscoresKeywordPage, { generateMetadata } from './with-reviews-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOlderaHighscoresKeywordPage />;
}
