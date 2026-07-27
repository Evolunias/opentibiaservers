import WithReviewsOtmadnessHighscoresKeywordPage, { generateMetadata } from './with-reviews-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOtmadnessHighscoresKeywordPage />;
}
