import WithReviewsClassicusHighscoresKeywordPage, { generateMetadata } from './with-reviews-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusHighscoresKeywordPage />;
}
