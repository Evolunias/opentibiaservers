import WithReviewsNilotHighscoresKeywordPage, { generateMetadata } from './with-reviews-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotHighscoresKeywordPage />;
}
