import WithReviewsNtoStarHighscoresKeywordPage, { generateMetadata } from './with-reviews-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarHighscoresKeywordPage />;
}
