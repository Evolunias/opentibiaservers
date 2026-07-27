import WithReviewsBlazeraHighscoresKeywordPage, { generateMetadata } from './with-reviews-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraHighscoresKeywordPage />;
}
