import WithReviewsSerenityHighscoresKeywordPage, { generateMetadata } from './with-reviews-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSerenityHighscoresKeywordPage />;
}
