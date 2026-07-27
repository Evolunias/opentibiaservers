import WithReviewsLumineraHighscoresKeywordPage, { generateMetadata } from './with-reviews-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraHighscoresKeywordPage />;
}
