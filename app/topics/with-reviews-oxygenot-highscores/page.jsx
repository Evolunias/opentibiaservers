import WithReviewsOxygenotHighscoresKeywordPage, { generateMetadata } from './with-reviews-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotHighscoresKeywordPage />;
}
