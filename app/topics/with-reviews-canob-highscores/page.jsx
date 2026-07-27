import WithReviewsCanobHighscoresKeywordPage, { generateMetadata } from './with-reviews-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobHighscoresKeywordPage />;
}
