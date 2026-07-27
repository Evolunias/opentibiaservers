import WithReviewsThaisotHighscoresKeywordPage, { generateMetadata } from './with-reviews-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotHighscoresKeywordPage />;
}
