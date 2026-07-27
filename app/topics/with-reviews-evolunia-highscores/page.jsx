import WithReviewsEvoluniaHighscoresKeywordPage, { generateMetadata } from './with-reviews-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoluniaHighscoresKeywordPage />;
}
