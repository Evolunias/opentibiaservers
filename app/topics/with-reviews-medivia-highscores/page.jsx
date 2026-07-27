import WithReviewsMediviaHighscoresKeywordPage, { generateMetadata } from './with-reviews-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaHighscoresKeywordPage />;
}
