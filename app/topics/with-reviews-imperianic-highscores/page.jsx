import WithReviewsImperianicHighscoresKeywordPage, { generateMetadata } from './with-reviews-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicHighscoresKeywordPage />;
}
