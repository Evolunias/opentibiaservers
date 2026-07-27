import WithReviewsNepreniaHighscoresKeywordPage, { generateMetadata } from './with-reviews-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaHighscoresKeywordPage />;
}
