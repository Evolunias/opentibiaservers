import WithReviewsRubinotHighscoresKeywordPage, { generateMetadata } from './with-reviews-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRubinotHighscoresKeywordPage />;
}
