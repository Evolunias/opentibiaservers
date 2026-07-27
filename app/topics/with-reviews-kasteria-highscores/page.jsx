import WithReviewsKasteriaHighscoresKeywordPage, { generateMetadata } from './with-reviews-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaHighscoresKeywordPage />;
}
