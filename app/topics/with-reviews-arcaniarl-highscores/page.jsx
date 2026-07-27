import WithReviewsArcaniarlHighscoresKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlHighscoresKeywordPage />;
}
