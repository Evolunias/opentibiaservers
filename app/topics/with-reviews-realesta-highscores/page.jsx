import WithReviewsRealestaHighscoresKeywordPage, { generateMetadata } from './with-reviews-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaHighscoresKeywordPage />;
}
