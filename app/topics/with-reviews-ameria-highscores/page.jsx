import WithReviewsAmeriaHighscoresKeywordPage, { generateMetadata } from './with-reviews-ameria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaHighscoresKeywordPage />;
}
